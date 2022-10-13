import React from 'react';
import classNames from 'classnames';
import styles from '../../styles/components/Textbox.module.scss';
import DOMPurify from 'isomorphic-dompurify';

type Props = {
    withBackground?: boolean;
    content: string;
}

const TextBox = (props: Props) => {

    const data = props.content;
    const sanitizedData = () => ({
        __html: DOMPurify.sanitize(data),
      })

    return (
        <div
          className={props.withBackground ? classNames(styles.TextBox, styles.TextBoxWithBg) : styles.TextBox}
          dangerouslySetInnerHTML={sanitizedData()}
        />
    )
}

export default TextBox;