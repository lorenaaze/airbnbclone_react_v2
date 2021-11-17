import { Carousel } from 'react-bootstrap';
import SimpleImageSlider from "react-simple-image-slider";

function PaginaInicial() {
    const images = [
        { url: "https://media.istockphoto.com/photos/father-with-four-children-preparing-for-day-on-the-beach-picture-id1315157609?b=1&k=20&m=1315157609&s=170667a&w=0&h=6FUuAPTWnVGEedZUN0XmyVMRhLNIpQEEBxzMzi4bKqA=" },
        { url: "https://images.unsplash.com/photo-1563148760-64687068abdf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhbXAlMjBob3VzZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { url: "https://media.istockphoto.com/photos/triangular-modern-lake-house-at-fall-picture-id1327080125?b=1&k=20&m=1327080125&s=170667a&w=0&h=MElJJ3dR0Ng3J1ux-384q4K5JC9WNJjLv6d2ttrsZlw=" },
    ];
    return (
        <>
            <div>
                <SimpleImageSlider
                    slideDuration={0.2}
                    width={"100%"}
                    height={504}
                    images={images}
                    showBullets={true}
                    showNavs={true}
                />
            </div>
        </>
    )
}

export default PaginaInicial;

{/* <Carousel className="d-block w-70">
<Carousel.Item>
    <img
        className="d-block w-100"
        src="https://media.istockphoto.com/photos/father-with-four-children-preparing-for-day-on-the-beach-picture-id1315157609?b=1&k=20&m=1315157609&s=170667a&w=0&h=6FUuAPTWnVGEedZUN0XmyVMRhLNIpQEEBxzMzi4bKqA="
        alt="First slide"
    />
    <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
    <img
        className="d-block w-100"
        src="https://images.unsplash.com/photo-1563148760-64687068abdf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhbXAlMjBob3VzZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        alt="Second slide"
    />

    <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
    <img
        className="d-block w-50"
        src="https://media.istockphoto.com/photos/triangular-modern-lake-house-at-fall-picture-id1327080125?b=1&k=20&m=1327080125&s=170667a&w=0&h=MElJJ3dR0Ng3J1ux-384q4K5JC9WNJjLv6d2ttrsZlw="
        alt="Third slide"
    />

    <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
</Carousel.Item>
</Carousel> */}