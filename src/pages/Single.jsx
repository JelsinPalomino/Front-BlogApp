import React from 'react';
import { Link } from 'react-router-dom';
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import Menu from "../components/Menu";

const Single = () => {
    return (
        <div className='single'>
            <div className="content">
                <img src="https://img1.ak.crunchyroll.com/i/spire1/fa1a9e5cf22cc5af666c1cfc1c6ed74b1667889290_main.jpg" alt="" />
                <div className="user">
                    <img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2022/09/imagenes-cyberpunk-edgerunners-2812299.jpg?itok=v5GEY3eh" alt="" />
                    <div className="info">
                        <span>John</span>
                        <p>Posted 2 days ago</p>
                    </div>
                    <div className="edit">
                        <Link to={`/write?edit=2`}>
                            <img src={Edit} alt="" />
                        </Link>
                        <img src={Delete} alt="" />
                    </div>
                </div>
                <h1>Lorem ipsum dolor.</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Pellentesque elit eget gravida cum. 
            <br />
            <br />
            Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Risus feugiat 
            in ante metus. Sit amet nulla facilisi morbi tempus iaculis urna. Ultricies mi quis 
            hendrerit dolor magna eget est lorem. Ut sem nulla pharetra diam. Montes nascetur ridiculus 
            mus mauris vitae ultricies. Libero volutpat sed cras ornare arcu. Integer malesuada nunc vel risus commodo viverra maecenas. Sodales neque sodales ut etiam sit amet nisl purus in. Scelerisque eu ultrices vitae auctor eu. Ipsum suspendisse ultrices gravida dictum fusce ut placerat. Quam pellentesque nec nam aliquam sem et tortor consequat. Ultrices neque ornare aenean euismod elementum.
            <br />
            <br />
            In ante metus dictum at tempor commodo ullamcorper. Aenean euismod elementum nisi quis. Aenean pharetra magna ac placerat. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. Suspendisse ultrices gravida dictum fusce ut placerat orci. Sagittis vitae et leo duis. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Dignissim sodales ut eu sem integer. Scelerisque varius morbi enim nunc. Luctus accumsan tortor posuere ac ut consequat semper viverra. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Tincidunt ornare massa eget egestas. Ullamcorper sit amet risus nullam eget felis eget. Ultricies tristique nulla aliquet enim tortor at auctor urna nunc.
            </p>
            </div>
            <Menu />
        </div>
    )
}

export default Single;