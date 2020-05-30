import styles from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoImage } from '../../assets/crown.svg';

export const HeaderContainer = styles.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    position: relative;

    @media screen and (max-width: 800px){
        height: 60px;
        padding: 10px;
        margin-bottom: 5px;
    }
`

export const LogoContainer = styles(Link)`
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media screen and (max-width: 800px){
        width: 50px;
        padding: 0;
    }
`

export const Logo = styles(LogoImage)`
    padding-left: 15px;
`

export const OptionsContainer = styles.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media screen and (max-width: 800px){
        width: 80%;
    }
`

export const LinkOption = styles(Link)`
    padding: 0 15px;
    cursor: pointer;
`