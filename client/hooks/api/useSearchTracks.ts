"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { ITrack } from '@/app/shared/types/track.interface';
import { API_URL } from "./api";

const fetchSearchTracks = async (query: string): Promise<ITrack[]> => {
  if (!query.trim()) return []; // если строка пустая, возвращаем пустой массив
  const { data } = await axios.get(`${API_URL}/tracks/search`, {
    params: { query },
  });
  return data;
};

export const useSearchTracks = (query: string) => {
  return useQuery<ITrack[], Error>({
    queryKey: ["tracks", "search", query],
    queryFn: () => fetchSearchTracks(query),
    enabled: !!query, // запрос выполняется только если query не пустая строка
  });
};
