import { Parallax } from 'react-scroll-parallax';

function ParallaxPage() {
    return (
        <div style={{ height: '300vh', backgroundColor: '#111' }}>
            <Parallax speed={-20}>
                <div
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1741648711665-e1a8003b7891?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY0fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed',
                        height: '100vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >

                    <h1 style={{
                        color: '#fff',
                        fontSize: '4rem',
                        textShadow: '2px 2px 10px rgba(0,0,0,0.8)',
                    }}>
                        Explore the Heights
                    </h1>
                </div>
            </Parallax>

            <Parallax speed={15}>
                <div style={{
                    marginTop: '150px',
                    padding: '40px',
                    backgroundColor: '#fff',
                    borderRadius: '12px',
                    width: '60%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: "black" }}>Why Parallax?</h2>
                    <p style={{ lineHeight: '1.6', fontSize: '1.1rem', color: "black" }}>
                        Parallax effects create motion as you scroll, giving your page a more immersive feel.
                        This can grab the user's attention and make your site look more professional and interactive.
                    </p>
                </div>
            </Parallax>
        </div>
    );
}

export default ParallaxPage;
