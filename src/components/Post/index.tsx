import styles from './Post.module.css';

import PostComments from '../PostComments';
import { ReactNode, useState } from 'react';

type Props = {
    children: ReactNode;
    imageUrl: string;
}

const Post = ({ children, imageUrl }: Props) => {

    const [isZoomed, setIsZoomed] = useState(false);

    const toogleZoom = () => {
        setIsZoomed(!isZoomed);
    };

    return (
        <div className={styles.post}>
            <img onClick={toogleZoom}
                className={`styles['post-image']} ${isZoomed ? styles.zoomed : ''}`}
                src={imageUrl} />
            <p className={styles['post-text']}> {children} </p>
            <PostComments />
        </div>
    )
};

export default Post;