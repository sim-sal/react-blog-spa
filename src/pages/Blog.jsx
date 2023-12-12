import Header from '../components/Header'
import MyFormData from '../components/MyFormData'
import PostsList from '../components/PostsList'

export default function Blog() {
    return (
        <>
            <Header />

            <main className={`container-fluid`}>
                <MyFormData />
                <PostsList />
            </main>
        </>
    );
}