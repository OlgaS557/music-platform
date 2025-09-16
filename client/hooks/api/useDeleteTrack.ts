"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const deleteTrack = async (id: string) => {
  await axios.delete(`http://localhost:5000/tracks/${id}`);
};

export const useDeleteTrack = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTrack,
    onSuccess: () => {
      // после удаления перезапрашиваем список треков
      queryClient.invalidateQueries({ queryKey: ["tracks"] });
    },
    onError: (error: unknown) => {
      // Логируем или показываем пользователю
      if (axios.isAxiosError(error)) {
        console.error("Ошибка при удалении:", error.response?.data || error.message);
        alert(`Ошибка: ${error.response?.data?.message || "Не удалось удалить трек"}`);
      } else {
        console.error("Неизвестная ошибка:", error);
        alert("Произошла неизвестная ошибка");
      }
    },
  });
};
