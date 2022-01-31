import Head from "next/head";
import Image from "next/image";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import styles from "../styles/Home.module.css";
import {fetchposts} from "../store/actions/postAction";

export default function Home() {
	const dispatch = useDispatch();
	const {posts} = useSelector((state) => state.post);

	useEffect(() => {
		dispatch(fetchposts());
	}, []);

	return (
		<>{posts && posts.map((items, index) => <h1 key={index}>{items}</h1>)}</>
	);
}
