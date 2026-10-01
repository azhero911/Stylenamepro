'use client';

import React, { useState, useMemo } from 'react';
import { Copy, Check, Search, Sparkles, Flame, Heart, Users, Swords, Zap, Share2 } from 'lucide-react';
import { useClipboard } from '@/lib/hooks/useClipboard';

export interface AnimeFfNameItem {
  name: string;
  category: 'boys' | 'girls' | 'symbols' | 'clans' | 'edits';
  charCount: number;
  tag: string;
}

export const ANIME_FF_BLOG_NAMES: AnimeFfNameItem[] = [
  // ================= BOYS (Kakashi, Gojo, Sukuna, Itachi, Levi, etc.) =================
  { name: '亗𝕶𝖆𝖐𝖆𝖘𝖍𝖎亗', category: 'boys', charCount: 9, tag: 'Kakashi' },
  { name: '꧁⚡𝕶𝖆𝖐𝖆𝖘𝖍𝖎⚡꧂', category: 'boys', charCount: 11, tag: 'Kakashi' },
  { name: '☬𝔎𝔞𝔨𝔞𝔰𝔥𝔦☬', category: 'boys', charCount: 9, tag: 'Kakashi' },
  { name: '影 𝐊𝐚𝐤𝐚𝐬𝐡𝐢 影', category: 'boys', charCount: 11, tag: 'Kakashi' },
  { name: '★彡𝓚𝓪𝓴𝓪𝓼𝓱𝓲彡★', category: 'boys', charCount: 11, tag: 'Kakashi' },
  { name: '⚡Kakashi⚡', category: 'boys', charCount: 9, tag: 'Kakashi' },
  { name: '亗Kakashi亗', category: 'boys', charCount: 9, tag: 'Kakashi' },
  { name: '〆ᴋᴀᴋᴀꜱʜɪ〆', category: 'boys', charCount: 9, tag: 'Kakashi' },
  { name: '꧁𝕶𝖆𝖐𝖆𝖘𝖍𝖎꧂', category: 'boys', charCount: 9, tag: 'Kakashi' },
  { name: '『ᴋᴀᴋᴀꜱʜɪ』', category: 'boys', charCount: 9, tag: 'Kakashi' },
  { name: '★𝐊𝐚𝐤𝐚𝐬𝐡𝐢★', category: 'boys', charCount: 9, tag: 'Kakashi' },
  { name: '彡𝓚𝓪𝓴𝓪𝓼𝓱𝓲彡', category: 'boys', charCount: 9, tag: 'Kakashi' },
  { name: '꧁༒𝔎𝔞𝔨𝔞𝔰𝔥𝔦༒꧂', category: 'boys', charCount: 11, tag: 'Kakashi' },

  { name: '꧁⚡𝕲𝖔𝖏𝖔⚡꧂', category: 'boys', charCount: 8, tag: 'Gojo' },
  { name: '亗 ɢ ᴏ ᴊ ᴏ 亗', category: 'boys', charCount: 9, tag: 'Gojo' },
  { name: '†𝕲𝖔𝖏𝖔†', category: 'boys', charCount: 6, tag: 'Gojo' },
  { name: '★彡𝓖𝓸𝓳𝓸彡★', category: 'boys', charCount: 8, tag: 'Gojo' },
  { name: '☬𝔊𝔬𝔧𝔬☬', category: 'boys', charCount: 6, tag: 'Gojo' },
  { name: '⚡Satoru⚡', category: 'boys', charCount: 8, tag: 'Gojo' },
  { name: '亗Gojo亗', category: 'boys', charCount: 6, tag: 'Gojo' },
  { name: '꧁༺ɢᴏᴊᴏ༻꧂', category: 'boys', charCount: 8, tag: 'Gojo' },
  { name: '𖣘 𝕲𝖔𝖏𝖔 𖣘', category: 'boys', charCount: 8, tag: 'Gojo' },
  { name: '𝔖𝔞𝔱𝔬𝔯𝔲⚡', category: 'boys', charCount: 7, tag: 'Gojo' },
  { name: '亗Infinity亗', category: 'boys', charCount: 10, tag: 'Gojo' },
  { name: '〆ꜱᴀᴛᴏʀᴜ〆', category: 'boys', charCount: 8, tag: 'Gojo' },

  { name: '†𝕾𝖚𝖐𝖚𝖓𝖆†', category: 'boys', charCount: 8, tag: 'Sukuna' },
  { name: '亗 ꜱ ᴜ ᴋ ᴜ ɴ ᴀ 亗', category: 'boys', charCount: 11, tag: 'Sukuna' },
  { name: '꧁☬𝕾𝖚𝖐𝖚𝖓𝖆☬꧂', category: 'boys', charCount: 10, tag: 'Sukuna' },
  { name: '☬𝔖𝔲𝔨𝔲𝔫𝔞☬', category: 'boys', charCount: 8, tag: 'Sukuna' },
  { name: '⚡Sukuna⚡', category: 'boys', charCount: 8, tag: 'Sukuna' },
  { name: '𖣘𝕾𝖚𝖐𝖚𝖓𝖆𖣘', category: 'boys', charCount: 8, tag: 'Sukuna' },
  { name: '★彡𝓢𝓾𝓴𝓾𝓷𝓪彡★', category: 'boys', charCount: 10, tag: 'Sukuna' },
  { name: '亗CurseKing亗', category: 'boys', charCount: 11, tag: 'Sukuna' },
  { name: '꧁༺ꜱᴜᴋᴜɴᴀ༻꧂', category: 'boys', charCount: 10, tag: 'Sukuna' },
  { name: '〆ꜱᴜᴋᴜɴᴀ〆', category: 'boys', charCount: 8, tag: 'Sukuna' },
  { name: '★Sukuna★', category: 'boys', charCount: 8, tag: 'Sukuna' },

  { name: '亗𝕴𝖙𝖆𝖈𝖍𝖎亗', category: 'boys', charCount: 8, tag: 'Itachi' },
  { name: '꧁⚡𝕴𝖙𝖆𝖈𝖍𝖎⚡꧂', category: 'boys', charCount: 10, tag: 'Itachi' },
  { name: '★彡𝓘𝓽𝓪𝓬𝓱𝓲彡★', category: 'boys', charCount: 10, tag: 'Itachi' },
  { name: '☬ℑ𝔱𝔞𝔠𝔥𝔦☬', category: 'boys', charCount: 8, tag: 'Itachi' },
  { name: '影 ɪᴛᴀᴄʜɪ 影', category: 'boys', charCount: 10, tag: 'Itachi' },
  { name: '亗Uchiha亗', category: 'boys', charCount: 8, tag: 'Itachi' },
  { name: '⚡Itachi⚡', category: 'boys', charCount: 8, tag: 'Itachi' },
  { name: '꧁༺ɪᴛᴀᴄʜɪ༻꧂', category: 'boys', charCount: 10, tag: 'Itachi' },
  { name: '𖣘 𝕴𝖙𝖆𝖈𝖍𝖎 𖣘', category: 'boys', charCount: 10, tag: 'Itachi' },
  { name: '〆ɪᴛᴀᴄʜɪ〆', category: 'boys', charCount: 8, tag: 'Itachi' },
  { name: '★Itachi★', category: 'boys', charCount: 8, tag: 'Itachi' },

  { name: '亗 𝓛𝓮𝓿𝓲 亗', category: 'boys', charCount: 8, tag: 'Levi' },
  { name: '꧁⚡𝕷𝖊𝖛𝖎⚡꧂', category: 'boys', charCount: 8, tag: 'Levi' },
  { name: '⚔️CaptLevi⚔️', category: 'boys', charCount: 10, tag: 'Levi' },
  { name: '★彡𝓛𝓮𝓿𝓲彡★', category: 'boys', charCount: 8, tag: 'Levi' },
  { name: '☬𝔏𝔢𝔳𝔦☬', category: 'boys', charCount: 6, tag: 'Levi' },
  { name: '亗Ackerman亗', category: 'boys', charCount: 10, tag: 'Levi' },
  { name: '⚡Levi⚡', category: 'boys', charCount: 6, tag: 'Levi' },
  { name: '꧁༺ʟᴇᴠɪ༻꧂', category: 'boys', charCount: 8, tag: 'Levi' },
  { name: '〆ʟᴇᴠɪ〆', category: 'boys', charCount: 6, tag: 'Levi' },
  { name: '𖣘 𝕷𝖊𝖛𝖎 𖣘', category: 'boys', charCount: 8, tag: 'Levi' },

  { name: '꧁☬𝖅𝖔𝖗𝖔☬꧂', category: 'boys', charCount: 8, tag: 'Zoro' },
  { name: '亗 𝕽𝖔𝖗𝖔𝖓𝖔𝖆 亗', category: 'boys', charCount: 11, tag: 'Zoro' },
  { name: '⚔️3Swords⚔️', category: 'boys', charCount: 9, tag: 'Zoro' },
  { name: '★彡𝓩𝓸𝓻𝓸彡★', category: 'boys', charCount: 8, tag: 'Zoro' },
  { name: '☬𝔅𝔬𝔯𝔬☬', category: 'boys', charCount: 6, tag: 'Zoro' },
  { name: '⚡Zoro⚡', category: 'boys', charCount: 6, tag: 'Zoro' },
  { name: '影 ᴢᴏʀᴏ 影', category: 'boys', charCount: 8, tag: 'Zoro' },
  { name: '꧁༺ᴢᴏʀᴏ༻꧂', category: 'boys', charCount: 8, tag: 'Zoro' },
  { name: '亗Zoro亗', category: 'boys', charCount: 6, tag: 'Zoro' },
  { name: '〆ᴢᴏʀᴏ〆', category: 'boys', charCount: 6, tag: 'Zoro' },

  { name: '⚡𝔗𝔞𝔫𝔧𝔦𝔯𝔬⚡', category: 'boys', charCount: 9, tag: 'Tanjiro' },
  { name: '亗 𝕿𝖆𝖓𝖏𝖎𝖗𝖔 亗', category: 'boys', charCount: 11, tag: 'Tanjiro' },
  { name: '★彡𝓣𝓪𝓷𝓳𝓲𝓻𝓸彡★', category: 'boys', charCount: 11, tag: 'Tanjiro' },
  { name: '꧁☬𝕿𝖆𝖓𝖏𝖎𝖗𝖔☬꧂', category: 'boys', charCount: 11, tag: 'Tanjiro' },
  { name: '🌸Tanjiro🌸', category: 'boys', charCount: 9, tag: 'Tanjiro' },
  { name: '☬𝔗𝔞𝔫𝔧𝔦𝔯𝔬☬', category: 'boys', charCount: 9, tag: 'Tanjiro' },
  { name: '亗Kamado亗', category: 'boys', charCount: 8, tag: 'Tanjiro' },
  { name: '꧁༺ᴛᴀɴᴊɪʀᴏ༻꧂', category: 'boys', charCount: 11, tag: 'Tanjiro' },

  { name: '亗 𝕸𝖆𝖉𝖆𝖗𝖆 亗', category: 'boys', charCount: 10, tag: 'Madara' },
  { name: '꧁⚡𝕸𝖆𝖉𝖆𝖗𝖆⚡꧂', category: 'boys', charCount: 10, tag: 'Madara' },
  { name: '★彡𝓜𝓪𝓭𝓪𝓻𝓪彡★', category: 'boys', charCount: 10, tag: 'Madara' },
  { name: '☬𝔐𝔞𝔡𝔞𝔯𝔞☬', category: 'boys', charCount: 8, tag: 'Madara' },
  { name: '⚡Madara⚡', category: 'boys', charCount: 8, tag: 'Madara' },
  { name: '影 ᴍᴀᴅᴀʀᴀ 影', category: 'boys', charCount: 10, tag: 'Madara' },
  { name: '亗Ghost亗', category: 'boys', charCount: 7, tag: 'Madara' },
  { name: '꧁༺ᴍᴀᴅᴀʀᴀ༻꧂', category: 'boys', charCount: 10, tag: 'Madara' },

  { name: '亗 𝕰𝖗𝖊𝖓 亗', category: 'boys', charCount: 8, tag: 'Eren' },
  { name: '꧁☬𝕰𝖗𝖊𝖓☬꧂', category: 'boys', charCount: 8, tag: 'Eren' },
  { name: '⚔️Yeager⚔️', category: 'boys', charCount: 8, tag: 'Eren' },
  { name: '★彡𝓔𝓻𝓮𝓷彡★', category: 'boys', charCount: 8, tag: 'Eren' },
  { name: '☬𝔈𝔯𝔢𝔫☬', category: 'boys', charCount: 6, tag: 'Eren' },
  { name: '⚡Tatakae⚡', category: 'boys', charCount: 9, tag: 'Eren' },
  { name: '꧁༺ᴇʀᴇɴ༻꧂', category: 'boys', charCount: 8, tag: 'Eren' },
  { name: '亗Founder亗', category: 'boys', charCount: 9, tag: 'Eren' },

  { name: '亗 𝕿𝖔𝖏𝖎 亗', category: 'boys', charCount: 8, tag: 'Toji' },
  { name: '꧁⚡𝕿𝖔𝖏𝖎⚡꧂', category: 'boys', charCount: 8, tag: 'Toji' },
  { name: '★彡𝓣𝓸𝓳𝓲彡★', category: 'boys', charCount: 8, tag: 'Toji' },
  { name: '☬𝔗𝔬𝔧𝔦☬', category: 'boys', charCount: 6, tag: 'Toji' },
  { name: '影 ᴛᴏᴊɪ 影', category: 'boys', charCount: 8, tag: 'Toji' },
  { name: '亗Killer亗', category: 'boys', charCount: 8, tag: 'Toji' },
  { name: '꧁༺ᴛᴏᴊɪ༻꧂', category: 'boys', charCount: 8, tag: 'Toji' },

  { name: '★彡𝓝𝓪𝓻𝓾𝓽𝓸彡★', category: 'boys', charCount: 10, tag: 'Naruto' },
  { name: '亗 𝕹𝖆𝖗𝖚𝖙𝖔 亗', category: 'boys', charCount: 10, tag: 'Naruto' },
  { name: '꧁⚡𝕹𝖆𝖗𝖚𝖙𝖔⚡꧂', category: 'boys', charCount: 10, tag: 'Naruto' },
  { name: '☬𝔑𝔞𝔯𝔲𝔱𝔬☬', category: 'boys', charCount: 8, tag: 'Naruto' },
  { name: '⚡Hokage⚡', category: 'boys', charCount: 8, tag: 'Naruto' },
  { name: '🍜Naruto🍜', category: 'boys', charCount: 8, tag: 'Naruto' },
  { name: '亗Uzumaki亗', category: 'boys', charCount: 9, tag: 'Naruto' },
  { name: '꧁༺ɴᴀʀᴜᴛᴏ༻꧂', category: 'boys', charCount: 10, tag: 'Naruto' },

  { name: '亗 𝕾𝖆𝖘𝖚𝖐𝖊 亗', category: 'boys', charCount: 10, tag: 'Sasuke' },
  { name: '꧁⚡𝕾𝖆𝖘𝖚𝖐𝖊⚡꧂', category: 'boys', charCount: 10, tag: 'Sasuke' },
  { name: '★彡𝓢𝓪𝓼𝓾𝓴𝓮彡★', category: 'boys', charCount: 10, tag: 'Sasuke' },
  { name: '☬𝔖𝔞𝔰𝔲𝔨𝔢☬', category: 'boys', charCount: 8, tag: 'Sasuke' },
  { name: '⚡Chidori⚡', category: 'boys', charCount: 9, tag: 'Sasuke' },
  { name: '影 ꜱᴀꜱᴜᴋᴇ 影', category: 'boys', charCount: 10, tag: 'Sasuke' },
  { name: '亗Avenger亗', category: 'boys', charCount: 9, tag: 'Sasuke' },
  { name: '꧁༺ꜱᴀꜱᴜᴋᴇ༻꧂', category: 'boys', charCount: 10, tag: 'Sasuke' },

  { name: '⚡ 𝕸𝖎𝖓𝖆𝖙𝖔 ⚡', category: 'boys', charCount: 10, tag: 'Minato' },
  { name: '亗 𝖄𝖊𝖑𝖑𝖔𝖜 亗', category: 'boys', charCount: 10, tag: 'Minato' },
  { name: '★彡𝓜𝓲𝓷𝓪𝓽𝓸彡★', category: 'boys', charCount: 10, tag: 'Minato' },
  { name: '☬𝔐𝔦𝔫𝔞𝔱𝔬☬', category: 'boys', charCount: 8, tag: 'Minato' },
  { name: '⚡Flash⚡', category: 'boys', charCount: 7, tag: 'Minato' },
  { name: '꧁༺ᴍɪɴᴀᴛᴏ༻꧂', category: 'boys', charCount: 10, tag: 'Minato' },
  { name: '亗4thHokage亗', category: 'boys', charCount: 11, tag: 'Minato' },

  { name: '꧁༺𝕶𝖊𝖓 𝕶𝔞𝔫𝔢𝔨𝔦༻꧂', category: 'boys', charCount: 12, tag: 'Kaneki' },
  { name: '亗 𝕶𝖆𝖓𝖊𝖐𝖎 亗', category: 'boys', charCount: 10, tag: 'Kaneki' },
  { name: '★彡𝓚𝓪𝓷𝓮𝓴𝓲彡★', category: 'boys', charCount: 10, tag: 'Kaneki' },
  { name: '☬𝔎𝔞𝔫𝔢𝔨𝔦☬', category: 'boys', charCount: 8, tag: 'Kaneki' },
  { name: '☠️Ghoul☠️', category: 'boys', charCount: 7, tag: 'Kaneki' },
  { name: '꧁⚡𝕶𝖆𝖓𝖊𝖐𝖎⚡꧂', category: 'boys', charCount: 10, tag: 'Kaneki' },
  { name: '〆ᴋᴀɴᴇᴋɪ〆', category: 'boys', charCount: 8, tag: 'Kaneki' },

  { name: '★𝓡𝓮𝓷𝓰𝓸𝓴𝓾★', category: 'boys', charCount: 9, tag: 'Rengoku' },
  { name: '亗 𝕽𝖊𝖓𝖌𝖔𝖐𝖚 亗', category: 'boys', charCount: 11, tag: 'Rengoku' },
  { name: '🔥Heart🔥', category: 'boys', charCount: 7, tag: 'Rengoku' },
  { name: '☬ℜ𝔢𝔫𝔤𝔬𝔨𝔲☬', category: 'boys', charCount: 9, tag: 'Rengoku' },
  { name: '⚡Flame⚡', category: 'boys', charCount: 7, tag: 'Rengoku' },
  { name: '꧁༺ʀᴇɴɢᴏᴋᴜ༻꧂', category: 'boys', charCount: 11, tag: 'Rengoku' },

  { name: '亗 𝕬𝖎𝖟𝖊𝖓 亗', category: 'boys', charCount: 8, tag: 'Aizen' },
  { name: '꧁☬𝕬𝖎𝖟𝖊𝖓☬꧂', category: 'boys', charCount: 8, tag: 'Aizen' },
  { name: '★彡𝓐𝓲𝔃𝓮𝓷彡★', category: 'boys', charCount: 8, tag: 'Aizen' },
  { name: '☬𝔄𝔦𝔷𝔢𝔫☬', category: 'boys', charCount: 6, tag: 'Aizen' },
  { name: '⚡Keikaku⚡', category: 'boys', charCount: 9, tag: 'Aizen' },
  { name: '影 ᴀɪᴢᴇɴ 影', category: 'boys', charCount: 8, tag: 'Aizen' },

  { name: '⚡ 𝕶𝖎𝖑𝖑𝖚𝖆 ⚡', category: 'boys', charCount: 10, tag: 'Killua' },
  { name: '亗 𝕶𝖎𝖑𝖑𝖚𝖆 亗', category: 'boys', charCount: 10, tag: 'Killua' },
  { name: '★彡𝓚𝓲𝓵𝓵𝓾𝓪彡★', category: 'boys', charCount: 10, tag: 'Killua' },
  { name: '☬𝔎𝔦𝖑𝖑𝔲𝔞☬', category: 'boys', charCount: 8, tag: 'Killua' },
  { name: '⚡Godspeed⚡', category: 'boys', charCount: 10, tag: 'Killua' },
  { name: '꧁༺ᴋɪʟʟᴜᴀ༻꧂', category: 'boys', charCount: 10, tag: 'Killua' },
  { name: '亗Zoldyck亗', category: 'boys', charCount: 9, tag: 'Killua' },

  { name: '亗 𝕵𝖎𝖓𝖜𝖔𝖔 亗', category: 'boys', charCount: 10, tag: 'Jinwoo' },
  { name: '꧁☬𝕵𝖎𝖓𝖜𝖔𝖔☬꧂', category: 'boys', charCount: 10, tag: 'Jinwoo' },
  { name: '⚔️Monarch⚔️', category: 'boys', charCount: 9, tag: 'Jinwoo' },
  { name: '★彡𝓙𝓲𝓷𝔀𝓸𝓸彡★', category: 'boys', charCount: 10, tag: 'Jinwoo' },
  { name: '☬𝔍𝔦𝔫𝔴𝔬𝔬☬', category: 'boys', charCount: 8, tag: 'Jinwoo' },
  { name: '⚡Arise⚡', category: 'boys', charCount: 7, tag: 'Jinwoo' },
  { name: '影 ᴀʀɪꜱᴇ 影', category: 'boys', charCount: 8, tag: 'Jinwoo' },

  // ================= GIRLS (Nezuko, Makima, Hinata, Mikasa, Nobara, etc.) =================
  { name: '✿ 𝓝𝓮𝔃𝓾𝓴𝓸 ✿', category: 'girls', charCount: 10, tag: 'Nezuko' },
  { name: '亗 𝕹𝖊𝖟𝖚𝖐𝖔 亗', category: 'girls', charCount: 10, tag: 'Nezuko' },
  { name: '꧁༺𝓝𝓮𝔃𝓾𝓴𝓸༻꧂', category: 'girls', charCount: 10, tag: 'Nezuko' },
  { name: '🎀Nezuko🎀', category: 'girls', charCount: 8, tag: 'Nezuko' },
  { name: '★彡𝓝𝓮𝔃𝓾𝓴𝓸彡★', category: 'girls', charCount: 10, tag: 'Nezuko' },
  { name: '🌸Kamado🌸', category: 'girls', charCount: 8, tag: 'Nezuko' },
  { name: '꧁✿𝕹𝖊𝖟𝖚𝖐𝖔✿꧂', category: 'girls', charCount: 10, tag: 'Nezuko' },
  { name: '†Nezuko†', category: 'girls', charCount: 8, tag: 'Nezuko' },

  { name: '† 𝕸𝖆𝖐𝖎𝖒𝖆 †', category: 'girls', charCount: 10, tag: 'Makima' },
  { name: '亗 𝕸𝖆𝖐𝖎𝖒𝖆 亗', category: 'girls', charCount: 10, tag: 'Makima' },
  { name: '꧁༺ᴍᴀᴋɪᴍᴀ༻꧂', category: 'girls', charCount: 10, tag: 'Makima' },
  { name: '🐕Control🐕', category: 'girls', charCount: 9, tag: 'Makima' },
  { name: '★彡𝓜𝓪𝓴𝓲𝓶𝓪彡★', category: 'girls', charCount: 10, tag: 'Makima' },
  { name: '☬𝔐𝔞𝔨𝔦𝔪𝔞☬', category: 'girls', charCount: 8, tag: 'Makima' },
  { name: '🩸Makima🩸', category: 'girls', charCount: 8, tag: 'Makima' },
  { name: '〆ᴍᴀᴋɪᴍᴀ〆', category: 'girls', charCount: 8, tag: 'Makima' },

  { name: '✿ 𝓗𝓲𝓷𝓪𝓽𝓪 ✿', category: 'girls', charCount: 10, tag: 'Hinata' },
  { name: '亗 𝕳𝖎𝖓𝖆𝖙𝖆 亗', category: 'girls', charCount: 10, tag: 'Hinata' },
  { name: '꧁༺ʜɪɴᴀᴛᴀ༻꧂', category: 'girls', charCount: 10, tag: 'Hinata' },
  { name: '★彡𝓗𝓲𝓷𝓪𝓽𝓪彡★', category: 'girls', charCount: 10, tag: 'Hinata' },
  { name: '💜Byakugan💜', category: 'girls', charCount: 10, tag: 'Hinata' },
  { name: '꧁✿𝕳𝖎𝖓𝖆𝖙𝖆✿꧂', category: 'girls', charCount: 10, tag: 'Hinata' },
  { name: '🌸Hyuga🌸', category: 'girls', charCount: 7, tag: 'Hinata' },
  { name: '†Hinata†', category: 'girls', charCount: 8, tag: 'Hinata' },

  { name: '⚔️ 𝕸𝖎𝖐𝖆𝖘𝖆 ⚔️', category: 'girls', charCount: 10, tag: 'Mikasa' },
  { name: '亗 𝕸𝖎𝖐𝖆𝖘𝖆 亗', category: 'girls', charCount: 10, tag: 'Mikasa' },
  { name: '꧁༺ᴍɪᴋᴀꜱᴀ༻꧂', category: 'girls', charCount: 10, tag: 'Mikasa' },
  { name: '★彡𝓜𝓲𝓴𝓪𝓼𝓪彡★', category: 'girls', charCount: 10, tag: 'Mikasa' },
  { name: '🧣Scarf🧣', category: 'girls', charCount: 7, tag: 'Mikasa' },
  { name: '☬𝔐𝔦𝔨𝔞𝔰𝔞☬', category: 'girls', charCount: 8, tag: 'Mikasa' },
  { name: '⚡Ackerman⚡', category: 'girls', charCount: 10, tag: 'Mikasa' },
  { name: '〆ᴍɪᴋᴀꜱᴀ〆', category: 'girls', charCount: 8, tag: 'Mikasa' },

  { name: '🔨 𝕹𝖔𝖇𝖆𝖗𝖆 🔨', category: 'girls', charCount: 10, tag: 'Nobara' },
  { name: '亗 𝕹𝖔𝖇𝖆𝖗𝖆 亗', category: 'girls', charCount: 10, tag: 'Nobara' },
  { name: '꧁༺ɴᴏʙᴀʀᴀ༻꧂', category: 'girls', charCount: 10, tag: 'Nobara' },
  { name: '★彡𝓝𝓸𝓫𝓪𝓻𝓪彡★', category: 'girls', charCount: 10, tag: 'Nobara' },
  { name: '🌹Kugisaki🌹', category: 'girls', charCount: 10, tag: 'Nobara' },
  { name: '☬𝔑𝔬𝔟𝔞𝔯𝔞☬', category: 'girls', charCount: 8, tag: 'Nobara' },
  { name: '💅Nobara💅', category: 'girls', charCount: 8, tag: 'Nobara' },

  { name: '☁️ 𝕶𝖆𝖌𝖚𝖞𝖆 ☁️', category: 'girls', charCount: 10, tag: 'Kaguya' },
  { name: '亗 𝕶𝖆𝖌𝖚𝖞𝖆 亗', category: 'girls', charCount: 10, tag: 'Kaguya' },
  { name: '꧁༺ᴋᴀɢᴜʏᴀ༻꧂', category: 'girls', charCount: 10, tag: 'Kaguya' },
  { name: '★彡𝓚𝓪𝓰𝓾𝔂𝓪彡★', category: 'girls', charCount: 10, tag: 'Kaguya' },
  { name: '🌙Moon🌙', category: 'girls', charCount: 6, tag: 'Kaguya' },
  { name: '☬𝔎𝔞𝔤𝔲𝔶𝔞☬', category: 'girls', charCount: 8, tag: 'Kaguya' },

  { name: '💖 𝕸𝖎𝖙𝖘𝖚𝖗𝖎 💖', category: 'girls', charCount: 11, tag: 'Mitsuri' },
  { name: '亗 𝕸𝖎𝖙𝖘𝖚𝖗𝖎 亗', category: 'girls', charCount: 11, tag: 'Mitsuri' },
  { name: '꧁༺ᴍɪᴛꜱᴜʀɪ༻꧂', category: 'girls', charCount: 11, tag: 'Mitsuri' },
  { name: '🌸Love🌸', category: 'girls', charCount: 6, tag: 'Mitsuri' },
  { name: '★彡𝓜𝓲𝓽𝓼𝓾𝓻𝓲彡★', category: 'girls', charCount: 11, tag: 'Mitsuri' },
  { name: '🎀Mitsuri🎀', category: 'girls', charCount: 9, tag: 'Mitsuri' },

  { name: '🦋 𝕾𝖍𝖎𝖓𝖔𝖇𝖚 🦋', category: 'girls', charCount: 11, tag: 'Shinobu' },
  { name: '亗 𝕾𝖍𝖎𝖓𝖔𝖇𝖚 亗', category: 'girls', charCount: 11, tag: 'Shinobu' },
  { name: '꧁༺ꜱʜɪɴᴏʙᴜ༻꧂', category: 'girls', charCount: 11, tag: 'Shinobu' },
  { name: '💜Kocho💜', category: 'girls', charCount: 7, tag: 'Shinobu' },
  { name: '★彡𝓢𝓱𝓲𝓷𝓸𝓫𝓾彡★', category: 'girls', charCount: 11, tag: 'Shinobu' },
  { name: '🌸Kocho🌸', category: 'girls', charCount: 7, tag: 'Shinobu' },

  { name: '👑 𝕳𝖆𝖓𝖈𝖔𝖈𝖐 👑', category: 'girls', charCount: 11, tag: 'Hancock' },
  { name: '亗 𝕭𝖔𝖆 亗', category: 'girls', charCount: 7, tag: 'Hancock' },
  { name: '꧁༺ʙᴏᴀ༻꧂', category: 'girls', charCount: 7, tag: 'Hancock' },
  { name: '🐍Princess🐍', category: 'girls', charCount: 10, tag: 'Hancock' },
  { name: '★彡𝓗𝓪𝓷𝓬𝓸𝓬𝓴彡★', category: 'girls', charCount: 11, tag: 'Hancock' },
  { name: '💋Empress💋', category: 'girls', charCount: 9, tag: 'Hancock' },

  { name: '🌹 𝖄𝖔𝖗 🌹', category: 'girls', charCount: 7, tag: 'Yor' },
  { name: '亗 𝕿𝖍𝖔𝖗𝖓 亗', category: 'girls', charCount: 9, tag: 'Yor' },
  { name: '꧁༺ʏᴏʀ༻꧂', category: 'girls', charCount: 7, tag: 'Yor' },
  { name: '🗡️Thorn🗡️', category: 'girls', charCount: 7, tag: 'Yor' },
  { name: '★彡𝓨𝓸𝓻彡★', category: 'girls', charCount: 7, tag: 'Yor' },
  { name: '🩸Yor🩸', category: 'girls', charCount: 5, tag: 'Yor' },

  { name: '🩸 𝕻𝖔𝖜𝖊𝖗 🩸', category: 'girls', charCount: 9, tag: 'Power' },
  { name: '亗 𝕻𝖔𝖜𝖊𝖗 亗', category: 'girls', charCount: 9, tag: 'Power' },
  { name: '꧁༺ᴘᴏᴡᴇʀ༻꧂', category: 'girls', charCount: 9, tag: 'Power' },
  { name: '🐱Fiend🐱', category: 'girls', charCount: 7, tag: 'Power' },
  { name: '★彡𝓟𝓸𝔀𝓮𝓻彡★', category: 'girls', charCount: 9, tag: 'Power' },

  { name: '👑 𝕿𝖘𝖚𝖓𝖆𝖉𝖊 👑', category: 'girls', charCount: 11, tag: 'Tsunade' },
  { name: '亗 𝕿𝖘𝖚𝖓𝖆𝖉𝖊 亗', category: 'girls', charCount: 11, tag: 'Tsunade' },
  { name: '꧁༺ᴛꜱᴜɴᴀᴅᴇ༻꧂', category: 'girls', charCount: 11, tag: 'Tsunade' },
  { name: '★彡𝓣𝓼𝓾𝓷𝓪𝓭𝓮彡★', category: 'girls', charCount: 11, tag: 'Tsunade' },

  { name: '🍊 𝓝𝓪𝓶𝓲 🍊', category: 'girls', charCount: 8, tag: 'Nami' },
  { name: '亗 𝕹𝖆𝖒𝖎 亗', category: 'girls', charCount: 8, tag: 'Nami' },
  { name: '꧁༺ɴᴀᴍɪ༻꧂', category: 'girls', charCount: 8, tag: 'Nami' },
  { name: '⚡Witch⚡', category: 'girls', charCount: 7, tag: 'Nami' },

  { name: '🌸 𝕽𝖔𝖇𝖎𝖓 🌸', category: 'girls', charCount: 9, tag: 'Robin' },
  { name: '亗 𝕽𝖔𝖇𝖎𝖓 亗', category: 'girls', charCount: 9, tag: 'Robin' },
  { name: '꧁༺ʀᴏʙɪɴ༻꧂', category: 'girls', charCount: 9, tag: 'Robin' },
  { name: '★彡𝓡𝓸𝓫𝓲𝓷彡★', category: 'girls', charCount: 9, tag: 'Robin' },

  // ================= COOL SYMBOLS & BADGES (亗, 𖣘, ⚡, ☬, ⚔) =================
  { name: '亗 𝕺 𝖙 𝖆 𝖐 𝖚 亗', category: 'symbols', charCount: 11, tag: 'Crowns' },
  { name: '꧁⚡𝕬𝖓𝖎𝖒𝖊⚡꧂', category: 'symbols', charCount: 9, tag: 'Lightning' },
  { name: '☬ 𝕾𝖍𝖎𝖓𝖔𝖇𝖎 ☬', category: 'symbols', charCount: 11, tag: 'Khanda' },
  { name: '𖣘 𝕾𝖆𝖒𝖚𝖗𝖆𝖎 𖣘', category: 'symbols', charCount: 11, tag: 'Ninja Wheel' },
  { name: '† 𝕯𝖊𝖒𝖔𝖓 †', category: 'symbols', charCount: 9, tag: 'Dagger Cross' },
  { name: '★ 𝕶𝖆𝖙𝖆𝖓𝖆 ★', category: 'symbols', charCount: 10, tag: 'Star Badges' },
  { name: '彡 𝕾𝖍𝖆𝖉𝖔𝖜 彡', category: 'symbols', charCount: 10, tag: 'Wings Trim' },
  { name: '父 𝕿𝖎𝖙𝖆𝖓 父', category: 'symbols', charCount: 9, tag: 'Kanji Kanji' },
  { name: '⚡ 𝕾𝖕𝖎𝖗𝖎𝖙 ⚡', category: 'symbols', charCount: 10, tag: 'Volt Badges' },
  { name: '亗 𝕶 𝖎 𝖓 𝖌 亗', category: 'symbols', charCount: 9, tag: 'Crown Spaced' },
  { name: '꧁༺ 𝖀𝖈𝖍𝖎𝖍𝖆 ༻꧂', category: 'symbols', charCount: 12, tag: 'Double Wings' },
  { name: '☬ 𝕽𝖞𝖔𝖎𝖌𝖎 ☬', category: 'symbols', charCount: 10, tag: 'Esports Trim' },
  { name: '𖣘 𝕾𝖆𝖙𝖔𝔯𝔲 𖣘', category: 'symbols', charCount: 10, tag: 'Gojo Wheel' },
  { name: '亗 𝕾𝔲𝔨𝔲𝔫𝔞 亗', category: 'symbols', charCount: 10, tag: 'Curse Crown' },
  { name: '† 𝕯𝔬𝔪𝔞𝔦𝔫 †', category: 'symbols', charCount: 10, tag: 'Domain Cross' },
  { name: '⚡ 𝕭𝔞𝔫𝔨𝔞𝔦 ⚡', category: 'symbols', charCount: 10, tag: 'Bleach Volt' },
  { name: '『 𝕾𝖍𝖎𝖓𝖎𝖌𝖆𝖒𝖎 』', category: 'symbols', charCount: 12, tag: 'Brackets' },
  { name: '亗 𝕰𝖘𝖕𝖆𝖉𝖆 亗', category: 'symbols', charCount: 10, tag: 'Arrancar Crown' },
  { name: '꧁ 𝕬𝖐𝖆𝖙𝖘𝖚𝖐𝖎 ꧂', category: 'symbols', charCount: 11, tag: 'Cloud Wings' },
  { name: '〆 𝕳𝖆𝖘𝖍𝖎𝖗𝖆 〆', category: 'symbols', charCount: 11, tag: 'Slayer Cut' },
  { name: '★ 𝕽𝖊𝖓𝖌𝖔𝖐𝖚 ★', category: 'symbols', charCount: 11, tag: 'Flame Stars' },
  { name: '☬ 𝕸𝖆𝖉𝖆𝖗𝖆 ☬', category: 'symbols', charCount: 10, tag: 'Ghost Badge' },
  { name: '亗 𝕿𝖔𝖏𝖎 亗', category: 'symbols', charCount: 8, tag: 'Zenith Crown' },
  { name: '⚡ 𝕾𝖆𝖘𝖚𝖐𝖊 ⚡', category: 'symbols', charCount: 10, tag: 'Avenger Volt' },
  { name: '𖣘 𝕴𝖙𝖆𝖈𝖍𝖎 𖣘', category: 'symbols', charCount: 10, tag: 'Crow Emblem' },
  { name: '† 𝕷𝖊𝖛𝖎 †', category: 'symbols', charCount: 8, tag: 'Scout Blade' },
  { name: '亗 𝕰𝖗𝖊𝖓 亗', category: 'symbols', charCount: 8, tag: 'Attack Crown' },
  { name: '꧁༺ 𝖅𝔬𝔯𝔬 ༻꧂', category: 'symbols', charCount: 10, tag: 'Pirate Wings' },
  { name: '父 𝕲𝔬𝔨𝔲 父', category: 'symbols', charCount: 8, tag: 'Saiyan Kanji' },
  { name: '★ 𝕱𝔯𝔦𝔢𝔷𝔞 ★', category: 'symbols', charCount: 10, tag: 'Emperor Star' },
  { name: '☬ 𝕭𝔯𝔬𝖑𝖞 ☬', category: 'symbols', charCount: 9, tag: 'Legendary' },
  { name: '⚡ 𝔙𝔢𝔤𝔢𝔱𝔞 ⚡', category: 'symbols', charCount: 10, tag: 'Prince Volt' },

  // ================= CLANS & SQUAD NAMES =================
  { name: '亗 ᴀᴋᴀᴛꜱᴜᴋɪ 亗', category: 'clans', charCount: 11, tag: 'Naruto' },
  { name: '꧁༺ ᴊᴜᴊᴜᴛꜱᴜ ༻꧂', category: 'clans', charCount: 12, tag: 'JJK' },
  { name: '☬ ʜᴀꜱʜɪʀᴀ ☬', category: 'clans', charCount: 11, tag: 'Demon Slayer' },
  { name: '𖣘 ᴜᴄʜɪʜᴀ 𖣘', category: 'clans', charCount: 10, tag: 'Naruto' },
  { name: '† ᴘʜᴀɴᴛᴏᴍ †', category: 'clans', charCount: 11, tag: 'Hunter x Hunter' },
  { name: '⚡ ᴛᴏᴍᴀɴ ⚡', category: 'clans', charCount: 9, tag: 'Tokyo Revengers' },
  { name: '亗 ᴇꜱᴘᴀᴅᴀ 亗', category: 'clans', charCount: 10, tag: 'Bleach' },
  { name: '⚔️ ꜱᴜʀᴠᴇʏ ⚔️', category: 'clans', charCount: 10, tag: 'Attack on Titan' },
  { name: '影 ꜱʜᴀᴅᴏᴡ 影', category: 'clans', charCount: 10, tag: 'Solo Leveling' },
  { name: '★ ɢᴏᴛᴇɪ13 ★', category: 'clans', charCount: 11, tag: 'Bleach' },
  { name: '亗 ꜱᴜᴋᴜɴᴀ-ꜱǫ 亗', category: 'clans', charCount: 12, tag: 'JJK Squad' },
  { name: '꧁ ʙʟᴀᴄᴋ-ʙᴜʟʟ ꧂', category: 'clans', charCount: 12, tag: 'Black Clover' },
  { name: '☬ ᴢᴏʟᴅʏᴄᴋ ☬', category: 'clans', charCount: 11, tag: 'Hunter x Hunter' },
  { name: '𖣘 ʜᴜɴᴛᴇʀꜱ 𖣘', category: 'clans', charCount: 11, tag: 'Solo Leveling' },
  { name: '† ɢʜᴏᴜʟꜱ †', category: 'clans', charCount: 10, tag: 'Tokyo Ghoul' },
  { name: '⚡ ᴄʜɪᴅᴏʀɪ ⚡', category: 'clans', charCount: 11, tag: 'Naruto' },
  { name: '亗 ꜱᴜꜱᴀɴᴏᴏ 亗', category: 'clans', charCount: 11, tag: 'Naruto' },
  { name: '꧁༺ ʀᴀꜱᴇɴɢᴀɴ ༻꧂', category: 'clans', charCount: 12, tag: 'Naruto' },
  { name: '〆 ᴠᴀɪᴢᴀʀᴅ 〆', category: 'clans', charCount: 11, tag: 'Bleach' },
  { name: '★ ꜱᴛʀᴀᴡ-ʜᴀᴛ ★', category: 'clans', charCount: 12, tag: 'One Piece' },
  { name: '亗 ʜᴇᴀʀᴛ-ᴘ 亗', category: 'clans', charCount: 11, tag: 'Law Crew' },
  { name: '☬ ᴄʀᴏᴡ-ꜱǫ ☬', category: 'clans', charCount: 11, tag: 'Itachi Squad' },
  { name: '𖣘 ᴍᴏɴᴀʀᴄʜ 𖣘', category: 'clans', charCount: 11, tag: 'Solo Leveling' },
  { name: '† ɪɴꜰɪɴɪᴛʏ †', category: 'clans', charCount: 12, tag: 'Gojo Squad' },
  { name: '⚡ ʙʟɪᴛᴢ-ᴀ ⚡', category: 'clans', charCount: 11, tag: 'Anime Blitz' },

  // ================= ANIME EDITS & VAPORWAVE =================
  { name: '『 ａｎｉｍｅ 』', category: 'edits', charCount: 9, tag: 'Vaporwave' },
  { name: '⚡ ｋａｋａｓｈｉ ⚡', category: 'edits', charCount: 12, tag: 'Edit Style' },
  { name: '𝔳𝔦𝔩𝔩𝔞𝔦𝔫 ⚡', category: 'edits', charCount: 9, tag: 'Dark Vibe' },
  { name: 'ɢᴏᴊᴏ 亗', category: 'edits', charCount: 6, tag: 'Small Caps' },
  { name: '☁️ 𝕶 𝖆 𝖌 𝖚 𝖞 𝖆 ☁️', category: 'edits', charCount: 12, tag: 'Soft Spaced' },
  { name: '꧁༺sᴀsᴜᴋᴇ༻꧂', category: 'edits', charCount: 11, tag: 'Edit Wings' },
  { name: '† ꜱ ᴜ ᴋ ᴜ ɴ ᴀ †', category: 'edits', charCount: 11, tag: 'Aesthetic' },
  { name: '彡 𝖉 𝖊 𝖒 𝖔 𝖓 彡', category: 'edits', charCount: 11, tag: 'Demon Edit' },
  { name: 'ɪᴛᴀᴄʜɪ ⚡ 999', category: 'edits', charCount: 12, tag: 'Juice Vibe' },
  { name: 'ｓａｔｏｒｕ 亗', category: 'edits', charCount: 9, tag: 'Fullwidth' },
  { name: 'ｌｅｖｉ ⚔️', category: 'edits', charCount: 8, tag: 'Fullwidth' },
  { name: 'ｒｅｎｇｏｋｕ 🔥', category: 'edits', charCount: 11, tag: 'Fullwidth' },
  { name: 'ｔａｎｊｉｒｏ 🌸', category: 'edits', charCount: 11, tag: 'Fullwidth' },
  { name: 'ｚｏｒｏ 🗡️', category: 'edits', charCount: 8, tag: 'Fullwidth' },
  { name: 'ｅｒｅｎ 🕊️', category: 'edits', charCount: 8, tag: 'Fullwidth' },
  { name: 'ｔｏｊｉ ⚡', category: 'edits', charCount: 7, tag: 'Fullwidth' },
  { name: 'ｍａｄａｒａ 亗', category: 'edits', charCount: 9, tag: 'Fullwidth' },
  { name: 'ｍａｋｉｍａ 🩸', category: 'edits', charCount: 9, tag: 'Fullwidth' },
  { name: 'ｎｅｚｕｋｏ ✿', category: 'edits', charCount: 9, tag: 'Fullwidth' },
  { name: 'ｈｉｎａｔａ 💜', category: 'edits', charCount: 9, tag: 'Fullwidth' },
  { name: 'ｍｉｋａｓａ 🧣', category: 'edits', charCount: 9, tag: 'Fullwidth' },
  { name: 'ｎｏｂａʀａ 🔨', category: 'edits', charCount: 9, tag: 'Fullwidth' },
  { name: 'ｙｏｒ 🌹', category: 'edits', charCount: 6, tag: 'Fullwidth' },
  { name: 'ｐｏｗｅｒ 🐱', category: 'edits', charCount: 8, tag: 'Fullwidth' },
  { name: 'ｋｉｌｌｕａ ⚡', category: 'edits', charCount: 9, tag: 'Fullwidth' },
  { name: 'ａｉｚｅｎ 影', category: 'edits', charCount: 7, tag: 'Fullwidth' },
  { name: 'ｊｉｎｗｏｏ ⚔️', category: 'edits', charCount: 9, tag: 'Fullwidth' },
];

export function AnimeFfBlogGrid() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState<number>(36);
  const { copyToClipboard, isCopied, getWhatsAppShareUrl } = useClipboard();

  const categories = [
    { key: 'all', label: 'All Anime (250+)', icon: Sparkles },
    { key: 'boys', label: 'Badass Boys (⚡)', icon: Flame },
    { key: 'girls', label: 'Aesthetic Girls (🌸)', icon: Heart },
    { key: 'symbols', label: 'Symbols & Badges (亗)', icon: Swords },
    { key: 'clans', label: 'Clan & Squad Tags', icon: Users },
    { key: 'edits', label: 'Anime Edits (🎬)', icon: Zap },
  ];

  const filteredItems = useMemo(() => {
    let result = ANIME_FF_BLOG_NAMES;
    if (activeCategory !== 'all') {
      result = result.filter((it) => it.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase().trim();
      result = result.filter(
        (it) =>
          it.name.toLowerCase().includes(q) ||
          it.tag.toLowerCase().includes(q) ||
          it.category.toLowerCase().includes(q)
      );
    }
    return result;
  }, [activeCategory, search]);

  const visibleList = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  const remaining = filteredItems.length - visibleCount;

  return (
    <div className="space-y-6">
      {/* Category Pills & Search */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1.5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.key);
                  setVisibleCount(36);
                }}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer ${
                  isActive
                    ? 'bg-amber-600 text-white shadow-sm ring-2 ring-amber-300'
                    : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search input */}
        <div className="relative sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setVisibleCount(36);
            }}
            placeholder="Search Kakashi, Gojo, Nezuko..."
            className="w-full h-10 pl-9 pr-3 rounded-xl border border-slate-200 bg-white text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-500"
          />
        </div>
      </div>

      {/* Grid of Copy Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {visibleList.map((item, idx) => {
          const copied = isCopied(item.name);
          return (
            <div
              key={`${item.name}-${idx}`}
              className="group p-4 bg-white rounded-2xl border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all flex flex-col justify-between gap-3"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded-md">
                  {item.tag}
                </span>
                <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                  FF: {item.charCount}/12 ✓
                </span>
              </div>

              {/* Display text */}
              <div className="font-bold text-slate-900 text-lg sm:text-xl py-1 text-center select-all tracking-wide break-all">
                {item.name}
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2 pt-1 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => copyToClipboard(item.name)}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer ${
                    copied
                      ? 'bg-emerald-600 text-white'
                      : 'bg-amber-500 hover:bg-amber-600 text-white shadow-xs'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Name</span>
                    </>
                  )}
                </button>
                <a
                  href={getWhatsAppShareUrl(item.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on WhatsApp"
                  className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Load More Button */}
      {remaining > 0 && (
        <div className="text-center pt-2">
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => prev + 36)}
            className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-all active:scale-95"
          >
            Load More Names ({remaining} remaining)
          </button>
        </div>
      )}
    </div>
  );
}
