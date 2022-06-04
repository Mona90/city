import styled from "styled-components";

export const SearchContent = styled.div
`position:fixed;
top:10px;
left:20px;
z-index:5;
height: max-content;
width:500px;
background-color: rgba(255,255,255,0.8);
border-radius: 14px;
.search_path{
    padding: 8px 12px;
    justify-content: flex-start;
    display: flex;
    flex-direction: row;
}
.search_box{
    background-color: rgba(255,255,255,0.8);
    // width: 100%;
    height: 60px;
    border-radius: 10px;
    padding: 5px 20px;
    display: flex;
    align-items: center;
    position: relative;
    .menu_icon{
        font-size: 33px;
    }
    .search_area{
        height: 100%;
        margin-right: 0;
        display: flex;
        align-items: center;
        flex: auto;
        overflow: hidden;
        position: relative;
        background-color: transparent !important;
        input{
            outline: none;
            border: none;
            height: 100%;
            font-size: 18px;
            margin: 0 10px;
            flex: auto;
            width: 100%;
            background-color: transparent !important;
            font-weight: 300;
        }
        .search_icon{
            font-size: 25px;
        }
    }
}
`