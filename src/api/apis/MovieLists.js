import axiosIns from "@/api/config/interceptors";

class MovieLists {
  async nowPlaying() {
    return await axiosIns.get('movie/now_playing')
  }
}

export default new MovieLists()
