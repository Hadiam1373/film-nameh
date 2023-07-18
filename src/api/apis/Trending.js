import axiosIns from "@/api/config/interceptors";

class Trending {
  async allTrending(time_window) {
    if (time_window === 'one' || time_window === 'day') {
      return await axiosIns.get(`trending/all/day`)
    }
    if (time_window === 'two' || time_window === 'week') {
      return await axiosIns.get(`trending/all/week`)
    }
  }
}

export default new Trending()
