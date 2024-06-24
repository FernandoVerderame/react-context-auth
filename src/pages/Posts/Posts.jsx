import axios from "axios";
import { useEffect, useState } from "react";
import PostCard from "../../components/PostCard/PostCard.jsx";
const apiUrl = import.meta.env.VITE_BASE_API_URL

const Posts = () => {

    const [posts, setPosts] = useState(null);

    const fetchPosts = async () => {
        const res = await axios.get(`${apiUrl}/posts`);
        const newPosts = res.data.data;
        setPosts(newPosts);
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <section className="container my-4">
            <div className="row g-4">
                {posts?.map(({ id, title, image, content, category, tags, published, slug, user }) => (
                    published === true &&
                    <div key={id} className="col-4">
                        <PostCard
                            title={title}
                            slug={slug}
                            image={image}
                            tags={tags}
                            content={content}
                            category={category?.name}
                            user={user}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Posts;