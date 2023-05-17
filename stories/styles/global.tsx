import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: eina;
    src: url(/fonts/eina/regular.ttf) format("truetype");
  }
  @font-face {
    font-family: eina;
    font-weight: 500;
    src: url(/fonts/eina/bold.ttf) format("truetype");
  }
  @font-face {
    font-family: editor;
    src: url(/fonts/editor/regular.ttf) format("truetype");
  }
  @font-face {
    font-family: editor;
    font-weight: 500;
    src: url(/fonts/editor/bold.ttf) format("truetype");
  }

  @font-face {
    font-family: 'Eina03-SemiBold';
    src: url('/fonts/eina03/Eina03-SemiBold.woff2') format('woff2'),
        url('/fonts/eina03/Eina03-SemiBold.woff') format('woff'),
        url('/fonts/eina03/Eina03-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Eina03-Light';
    src: url('/fonts/eina03/Eina03-Light.woff2') format('woff2'),
        url('/fonts/eina03/Eina03-Light.woff') format('woff'),
        url('/fonts/eina03/Eina03-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Eina03-Bold';
    src: url('/fonts/eina03/Eina03-Bold.woff2') format('woff2'),
        url('/fonts/eina03/Eina03-Bold.woff') format('woff'),
        url('/fonts/eina03/Eina03-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Eina03-Regular';
    src: url('/fonts/eina03/Eina03-Regular.woff2') format('woff2'),
        url('/fonts/eina03/Eina03-Regular.woff') format('woff'),
        url('/fonts/eina03/Eina03-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

// Editor's Note

@font-face {
  font-family: 'EditorsNote-Hairline';
  src: url('/fonts/editorsnot/EditorsNote-Hairline.woff2') format('woff2'),
      url('/fonts/editorsnot/EditorsNote-Hairline.woff') format('woff'),
      url('/fonts/editorsnot/EditorsNote-Hairline.ttf') format('truetype');
  font-weight: 100;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'EditorsNote-Medium';
  src: url('/fonts/editorsnot/EditorsNote-Medium.woff2') format('woff2'),
      url('/fonts/editorsnot/EditorsNote-Medium.woff') format('woff'),
      url('/fonts/editorsnot/EditorsNote-Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'EditorsNote-Bold';
  src: url('/fonts/editorsnot/EditorsNote-Bold.woff2') format('woff2'),
      url('/fonts/editorsnot/EditorsNote-Bold.woff') format('woff'),
      url('/fonts/editorsnot/EditorsNote-Bold.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'EditorsNote-Light';
  src: url('/fonts/editorsnot/EditorsNote-Light.woff2') format('woff2'),
      url('/fonts/editorsnot/EditorsNote-Light.woff') format('woff'),
      url('/fonts/editorsnot/EditorsNote-Light.ttf') format('truetype');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'EditorsNote-Extralight';
  src: url('/fonts/editorsnot/EditorsNote-Extralight.woff2') format('woff2'),
      url('/fonts/editorsnot/EditorsNote-Extralight.woff') format('woff'),
      url('/fonts/editorsnot/EditorsNote-Extralight.ttf') format('truetype');
  font-weight: 200;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'EditorsNote-Regular';
  src: url('/fonts/editorsnot/EditorsNote-Regular.woff2') format('woff2'),
      url('/fonts/editorsnot/EditorsNote-Regular.woff') format('woff'),
      url('/fonts/editorsnot/EditorsNote-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'EditorsNote-Semibold';
  src: url('/fonts/editorsnot/EditorsNote-Semibold.woff2') format('woff2'),
      url('/fonts/editorsnot/EditorsNote-Semibold.woff') format('woff'),
      url('/fonts/editorsnot/EditorsNote-Semibold.ttf') format('truetype');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'EditorsNote-Thin';
  src: url('/fonts/editorsnot/EditorsNote-Thin.woff2') format('woff2'),
      url('/fonts/editorsnot/EditorsNote-Thin.woff') format('woff'),
      url('/fonts/editorsnot/EditorsNote-Thin.ttf') format('truetype');
  font-weight: 100;
  font-style: normal;
  font-display: swap;
}



  body {
    /* background: ; */
    margin: 0;
    ::-webkit-scrollbar-thumb {
    background: rgb(129, 142, 163);
    border-radius: 8px;
    }
    ::-webkit-scrollbar {
        width: 0px;
    }
    * {
    box-sizing: border-box;
    margin: 0;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    picture {
        cursor: pointer;
    }
    color: ${({ theme }) => theme.colors.primary};
    @media (max-width: 480px) {
      picture {
        width: 100%;
        cursor: pointer;
      }
    }
  }
    
#chakra-modal-ChatModal{
  padding: 0px !important;
  border-radius: 10px;
  overflow: hidden;
  max-width:700px;
}


#chakra-modal--body-ChatModal{
  padding: 0px;
}

#chakra-modal-ChatModal .messaging__channel-list__header__name{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 200px;
}


.str-chat__message-input{
  padding-bottom: 13px !important;
}

.messaging__channel-list__header{
  padding-top: 10px !important;
  margin-bottom: 15px !important;
  border-bottom: 1px solid gray;
  background-color: #000000 !important;
}

.chakra-modal__close-btn{
  color:white;
  z-index: 99999;
  font-size: 15px !important;
  top: 12px !important;
}


.messaging__channel-header{
  justify-content:flex-start !important;
  webkit-justify-content: flex-start !important;
}


.messaging__channel-header .channel-header__name{
  max-width: 240px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.messaging__channel-list__header__button{
  width: 30px !important;
  height: 30px !important;
  margin-right: 0px !important;
}

.messaging__channel-list__header__button svg{
  width: 18px !important;
}

@media screen and (min-width: 769px) {
  .str-chat__list{
    min-height: 422px;
    max-height: 422px !important;
    max-width:380px;
  }
  .str-chat.str-chat__theme-dark{
    min-height: 422px;
    max-height: 558px;
    height: 85%;
    padding-bottom: 0px;
  }

}

@media screen and (max-width: 500px) {
  .messaging__channel-header .channel-header__name{
      max-width: 200px;
  }

  .messaging__channel-list__header__button{
    margin-right: 40px;
  }

  .messaging__channel-header{
    justify-content:left !important
  }

  .messaging__channel-list__header__button{
    margin-right:40px !important;
  }
}

.str-chat__avatar .str-chat__avatar-image{
  background-color: #000000 !important;
}

.str-chat__avatar .str-chat__avatar-image{
  object-fit: contain !important;
}



#tooltipOpeChatList,#tooltipOpeChat {
  font-family: Mulish !important;
}
`

export const GlobalContainer: React.FC<{
  children: React.ReactNode
  background?: string
}> = ({ children, background = 'transparent' }) => {
  return (
    <Wrapper background={background}>
      <FixedWidthWrapper>{children}</FixedWidthWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ background: string }>`
  width: 100%;
  background-color: ${({ background }) => background} !important;
`

const FixedWidthWrapper = styled.div<{ background?: string }>`
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px 100px;
  position: relative;
  @media (max-width: 576px) {
    padding: 20px;
  }
`

export default GlobalStyle
