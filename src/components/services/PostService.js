import axios from "axios";

const POST_BASE_URL = "http://localhost:8080/posts";
class PostService {
    getPosts(){
        return axios.get(POST_BASE_URL+"");
    }
    getPost(id){
        console.log(id);
        return axios.get(POST_BASE_URL+"/"+id);
    }
    savePost(data) {
        console.log(data);
        return axios.post(POST_BASE_URL, data);
    }


}

export default new PostService();