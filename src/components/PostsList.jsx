import { useEffect } from "react";
import { useState } from "react";
import style from "../css/modules/PostsList.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";

let initialFetchDone = false;

export default function PostsList() {

    const [posts, setPosts] = useState([]);

    async function fetchPosts() {
        const data = await (await fetch('http://localhost:3000/posts/')).json();

        setPosts(data);
    }

    async function removePost(postSlug) {
        const response = await fetch(`http://localhost:3000/posts/${postSlug}`, {
            method: "delete",
        });

        if (response.ok) {
            // Rimuovo il post dalla lista locale
            setPosts(posts.filter(post => post.slug !== postSlug));
        } else {
            console.error("Errore durante l'eliminazione del post");
        }
    }

    useEffect(() => {
        if (!initialFetchDone) {
            initialFetchDone = true;
            fetchPosts();
        }
    }, []);

    return (
        <div className={style.posts_list_container}>
            <div className={`row justify-content-center`}>
                {posts.map((post) => (


                    <div className={`card col-5 mx-5 my-5 ${style.mod_card}`}>

                        <img className={style.card_img} src={post.image ? post.image : "/image_not_found.jpg"} alt="Post" />

                        <div className={style.card_main}>
                            <div className={style.card_header}>
                                <NavLink key={post.id} to={"/show-post"}>
                                    <button className={style.post_show}>
                                        <h3>{post.title}</h3>
                                    </button>
                                </NavLink>

                                <button
                                    className={style.delete_button}
                                    onClick={(e) => {
                                        e.stopPropagation(); // Evita la propagazione dell'evento al componente NavLink
                                        removePost(post.slug);
                                    }}
                                >
                                    <FontAwesomeIcon icon="fa-solid fa-trash" />
                                </button>

                            </div>

                            <p>{post.content ? post.content : "Contenuto non disponibile"}</p>

                            <div>
                                <h5>Categoria:</h5>
                                <span>{post.category ? post.category.name : "Categoria non disponibile"}</span>
                            </div>

                            <div>
                                <h5>Tag:</h5>
                                {post.tags ? (
                                    post.tags.map((tag) => (
                                        <span key={tag.id}>{tag.name} </span>
                                    ))
                                ) : (
                                    <span>Tags non disponibili</span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}