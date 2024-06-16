import axios from "axios";

//Key JdyuITLZH2wf2Hsg2yrHiqyTNHwsj2pjJ2vbi7jSqcis2vHPnvPCVfLc

export const getImages = async (searchTerm = "programming") =>
  await axios.get(`https://api.pexels.com/v1/search?query=${searchTerm}`, {
    headers: {
      Authorization: "JdyuITLZH2wf2Hsg2yrHiqyTNHwsj2pjJ2vbi7jSqcis2vHPnvPCVfLc"
    }
  })