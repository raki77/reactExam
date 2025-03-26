import Profile from "./Profile";
// 프로파일 함수를 여기다가 한꺼번에 사용해도 되지만,
// 이렇게 파일로 분리 시켜도 된다.
function Gallery() {
    return (
        <section>
            <h1>Amazing scientists</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    );
} 
export default Gallery;