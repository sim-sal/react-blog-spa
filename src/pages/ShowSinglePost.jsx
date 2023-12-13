import { Navigate, useNavigate, useNavigation, useParams, useSearchParams } from "react-router-dom"
import style from "../css/modules/ShowSinglePost.module.css"
import { useEffect, useState } from "react";


export default function ShowSinglePost() {

    const { slug } = useParams();
    const [searchParams, setSearcParams] = useSearchParams();

    const [post, setPost] = useState({});
    const navigation = useNavigate();

    async function fetchData() {
        setPost(await (await (fetch('http://localhost:3000/posts/' + slug))).json());
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            <button onClick={() => navigation(-1)}>Torna indietro</button>
            <div className={`container ${style.container_show}`}>
                <div className={"row py-3 justify-content-center"}>
                    <div className={`col-10 mt-5 mb-5`}>
                        <div className={`card col-10 mx-5 my-5`}>

                            <img src={post.image ? post.image : "/image_not_found.jpg"} alt="Post" />

                            <div className={style.card_main}>
                                <div className={style.card_header}>
                                    <h3>{post.title}</h3>
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
                    </div>
                </div>
            </div>
        </>
    )
}