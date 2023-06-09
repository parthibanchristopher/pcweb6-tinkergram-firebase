import { useEffect, useState } from "react";
import { Container, Image, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { collection, getDocs, where, query, orderBy, limit } from "firebase/firestore";
import { auth, db } from "../firebase";
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";


export default function PostPageHome() {
    const [posts, setPosts] = useState([]);
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    async function getAllPosts() {
        const querySnapshot = await getDocs(query(collection(db, "posts"), where("uid", "==", user.uid)));
        const posts = querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });
        posts.sort((a, b) => { return b.date - a.date; });
        setPosts(posts);
    }

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/login");
        getAllPosts();
    }, [navigate, user, loading]);

    const ImagesRow = () => {
        return posts.map((post, index) => <ImageSquare key={index} post={post} />);
    };

    return (
        <>
            <Navbar variant="light" bg="light">
                <Container>
                    <Navbar.Brand href="/">Tinkergram</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="/add">New Post</Nav.Link>
                        <Nav.Link onClick={(e) => signOut(auth)}>🚪</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container>
                <Row>
                    <ImagesRow />
                </Row>
            </Container>
        </>
    );
}

function ImageSquare({ post }) {
    const { image, id } = post;
    return (
        <Link
            to={`post/${id}`}
            style={{
                width: "18rem",
                marginLeft: "1rem",
                marginTop: "2rem",
            }}
        >
            <Image
                src={image}
                style={{
                    objectFit: "cover",
                    width: "18rem",
                    height: "18rem",
                }}
            />
        </Link>
    );
}