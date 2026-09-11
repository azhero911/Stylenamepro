'use client';

import { useState, useEffect, useCallback } from 'react';
import { FavoriteItem } from '@/types';

const STORAGE_KEY = 'namestylepro_saved_favorites';
const MAX_FAVORITES = 50;

export function useFavorites() {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage
  const loadFavorites = useCallback(() => {
    if (typeof window === 'undefined') return;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setFavorites(parsed);
        }
      } else {
        setFavorites([]);
      }
    } catch {
      setFavorites([]);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Initial load + cross-tab storage event listener
  useEffect(() => {
    loadFavorites();

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        loadFavorites();
      }
    };

    const handleCustomEvent = () => {
      loadFavorites();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('namestylepro_favorites_updated', handleCustomEvent);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('namestylepro_favorites_updated', handleCustomEvent);
    };
  }, [loadFavorites]);

  // Persist to storage & notify other components/tabs
  const saveToStorage = useCallback((items: FavoriteItem[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      setFavorites(items);
      window.dispatchEvent(new Event('namestylepro_favorites_updated'));
    } catch {
      // localStorage error fallback
    }
  }, []);

  const addFavorite = useCallback(
    (text: string) => {
      if (!text.trim()) return;
      const cleanText = text.trim();
      const existing = favorites.find((f) => f.text === cleanText);
      if (existing) return;

      const newItem: FavoriteItem = {
        id: `fav-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
        text: cleanText,
        savedAt: Date.now(),
      };

      const updated = [newItem, ...favorites].slice(0, MAX_FAVORITES);
      saveToStorage(updated);
    },
    [favorites, saveToStorage]
  );

  const removeFavorite = useCallback(
    (textOrId: string) => {
      const updated = favorites.filter((f) => f.id !== textOrId && f.text !== textOrId);
      saveToStorage(updated);
    },
    [favorites, saveToStorage]
  );

  const toggleFavorite = useCallback(
    (text: string) => {
      const cleanText = text.trim();
      const isFav = favorites.some((f) => f.text === cleanText);
      if (isFav) {
        removeFavorite(cleanText);
      } else {
        addFavorite(cleanText);
      }
    },
    [favorites, addFavorite, removeFavorite]
  );

  const isFavorite = useCallback(
    (text: string) => {
      return favorites.some((f) => f.text === text.trim());
    },
    [favorites]
  );

  const clearAllFavorites = useCallback(() => {
    saveToStorage([]);
  }, [saveToStorage]);

  return {
    favorites,
    isLoaded,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
    clearAllFavorites,
    count: favorites.length,
  };
}
