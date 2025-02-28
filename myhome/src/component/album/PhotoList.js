import React, { Component, useEffect, useState} from 'react';
import Axios from 'axios'; 

function PhotoList() {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    // 1번째 매개변수 - 화살표 함수 , 2번째 매개변수 - 배열
    // 배열에 전달된 변수들이 업데이트 되면 앞에 전달된 함수를 호출한다.
    // 잘못 만들면 무한 로딩을 한다.
    useEffect(() => {
        //setLoading(true);
        Axios.get("https://jsonplaceholder.typicode.com/photos")
        .then((res) => {
            // 데이터를 받아와서 photos에 넣는다.
            setPhotos( res.data ); 
            // loading 변수값이 true일때, 
            // 아래에 있는 map이 작동 되어야 한다.
            setLoading(false); 
        })
        .catch((error) => {
            console.error("Error fetching photos:", error);
            setLoading(false); // 에러 발생 시에도 로딩 상태 비활성화
        });
    }, [loading]);
    // loading 값 변경 시 다시 
    return (
        <div>
            <ul>
                <h2>Photo List</h2>
                {
                    loading? (
                        <p>Loading...</p> // 로딩 중일 때 메시지 표시
                    ) : (
                        photos.map((item) => {
                                return (
                                    <li key={item.id}>
                                        {item.title}
                                    </li>
                                )
                            }
                        )
                    )
                }
            </ul>            
        </div>
    );
}
export default PhotoList;