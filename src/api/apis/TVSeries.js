import axiosIns from "@/api/config/interceptors";

class TVSeries {
  async getPopular() {
     return await axiosIns.get('tv/popular')
  }
}

export default new TVSeries()
