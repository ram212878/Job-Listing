import axios from "axios";

const POST_BASE_URL = "http://localhost:8080/posts";
const SEARCH_URL = POST_BASE_URL.concat("/search/");
class PostApiService {

    async getPosts() {
        try {
            let res = await axios.get(POST_BASE_URL);
            return res.data;
        } catch (err) {
            return err;
        }
    }
    getPost(id) {
        console.log(id);
        return axios.get(POST_BASE_URL + "/" + id);
    }
    savePost(data) {
        console.log(data);
        return axios.post(POST_BASE_URL, data);
    }

    async search(text) {
        try {
            let res = await axios.get(SEARCH_URL+text+" ");
            return res.data;
        } catch (err) {
            return [];
        }
    }

    async delete(id){
        console.log(id);
        await axios.delete(POST_BASE_URL+"/"+id+"");
    }


}

export default new PostApiService();