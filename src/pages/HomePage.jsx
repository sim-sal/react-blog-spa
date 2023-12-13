import style from "../css/modules/HomePage.module.css"

export default function HomePage() {
    return (
        <>
            <div className={`container ${style.container_home}`}>
                <div className={"row py-3 justify-content-center"}>
                    <div className={`col-10 mt-5 mb-5 ${style.welcome}`}>
                        <h1 className={style.author}>Blog powered by SimSaladin</h1>
                    </div>
                </div>
            </div>
        </>
    )
} 