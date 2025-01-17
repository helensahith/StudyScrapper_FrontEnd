import axios from "axios";

const getVid = async (query, channelname, rated) => {
  const qdata = {
    query: query,
    channelname: channelname,
    rated: rated,
  };

  //console.log(qdata);
  const data = await axios.post("http://127.0.0.1:3500/videocall", qdata);
  console.log(data.data.id);
  if (data) return data.data;
  return null;
};

export default getVid;
