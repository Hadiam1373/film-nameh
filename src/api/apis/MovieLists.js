import axiosIns from "@/api/config/interceptors";

class MovieLists {
  async nowPlaying() {
    return await axiosIns.get('movie/now_playing')
  }

  async Popular(){
    return await axiosIns.get('movie/popular')
  }
}

export default new MovieLists()
