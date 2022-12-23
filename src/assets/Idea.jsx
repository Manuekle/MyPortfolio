/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Idea(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 64.002 64.002"
      xmlSpace="preserve"
      {...props}
    >
      <path d="M53.647 48.449l-7.207-.424-4.383-4.383c.27-4.743 1.93-9.239 4.773-12.779 3.03-3.773 4.49-8.525 4.112-13.381C50.235 8.42 43.18 1.118 34.165.121 28.673-.483 23.409 1.19 19.331 4.842a19.029 19.029 0 00-6.33 14.159 18.78 18.78 0 003.89 11.502c3.063 4.007 4.785 8.552 5.055 13.216l-3.447 4.309-8.108.451C4.564 48.802.001 53.626.001 59.461v4.541h2v-4.541a9.003 9.003 0 018.501-8.986l8.154-.453 6.695 5.738a.994.994 0 001.357-.052l1.138-1.138 1.023 1.534-2.786 6.503a.97.97 0 00-.082.394v1.001h2v-.796l2.919-6.812a.995.995 0 00-.087-.948l-1.545-2.318 2.713-2.713 2.713 2.713-1.545 2.318a.995.995 0 00-.087.948l2.919 6.812v.796h2v-1.001a.985.985 0 00-.081-.394l-2.786-6.503 1.023-1.534 1.138 1.138a.992.992 0 00.706.293c.21 0 .421-.065.6-.2l7.707-5.78 7.222.425c4.749.279 8.471 4.225 8.471 8.984v4.572h2V59.43c0-5.817-4.548-10.64-10.354-10.981zM15.001 19.001c0-4.828 2.064-9.445 5.664-12.669 3.648-3.267 8.367-4.767 13.279-4.223 7.933.877 14.382 7.553 15.003 15.529.339 4.346-.967 8.598-3.677 11.973-3.074 3.826-4.882 8.665-5.203 13.765l-4.066 2.259V26.536l8.555-5.703c.278-.186.445-.498.445-.832v-3a5.951 5.951 0 00-1.8-4.278 5.962 5.962 0 00-7.7-.583 5.944 5.944 0 00-7 0 5.944 5.944 0 00-3.5-1.139c-3.309 0-6 2.691-6 6v3.001c0 .334.167.646.445.832l8.555 5.702v19.099l-4.07-2.261c-.336-4.983-2.193-9.823-5.452-14.086a16.799 16.799 0 01-3.478-10.287zm17 28.856l-2-1.111V26.001c0-.334-.167-.646-.445-.832l-8.555-5.702v-2.466c0-2.206 1.794-4 4-4 .739 0 1.451.202 2.071.581l-.016.027a5.926 5.926 0 00-.403.682c-.029.056-.055.113-.082.17-.106.225-.2.454-.277.691l-.023.062a6.032 6.032 0 00-.181.779c-.011.063-.02.127-.029.191-.035.269-.06.541-.06.817 0 1.619.639 3.139 1.8 4.278a.999.999 0 001.4 0 5.951 5.951 0 001.8-4.278c0-.276-.025-.548-.062-.817-.009-.064-.018-.128-.029-.191a6.032 6.032 0 00-.181-.779l-.023-.062a5.963 5.963 0 00-.277-.691c-.027-.057-.053-.114-.082-.17a6.012 6.012 0 00-.403-.682l-.016-.027c1.24-.758 2.902-.758 4.143 0l-.016.027a5.926 5.926 0 00-.403.682c-.029.056-.055.113-.082.17-.106.225-.2.454-.277.691l-.023.062a6.032 6.032 0 00-.181.779c-.011.063-.02.127-.029.191a5.951 5.951 0 001.741 5.095.999.999 0 001.4 0 5.951 5.951 0 001.8-4.278c0-.276-.025-.548-.062-.817-.009-.064-.018-.128-.029-.191a6.032 6.032 0 00-.181-.779l-.023-.062a5.963 5.963 0 00-.277-.691c-.027-.057-.053-.114-.082-.17a6.012 6.012 0 00-.403-.682l-.016-.027c1.502-.917 3.585-.693 4.871.568a3.966 3.966 0 011.202 2.851v2.465l-8.555 5.703a1.001 1.001 0 00-.445.832v20.745l-2 1.111zm-3.302-32.376a4.015 4.015 0 01.232.813c.041.232.07.467.07.707s-.029.475-.07.707a3.958 3.958 0 01-.232.813c-.012.029-.028.057-.041.086-.044.1-.104.192-.156.287-.052-.096-.112-.188-.156-.287-.013-.029-.029-.057-.042-.087a4.015 4.015 0 01-.232-.813c-.042-.231-.071-.466-.071-.706s.029-.475.07-.707a3.985 3.985 0 01.232-.813c.012-.03.028-.057.041-.087.044-.099.104-.191.156-.287.052.096.112.188.157.288.013.029.029.057.042.086zm7 0a4.015 4.015 0 01.232.813c.041.232.07.467.07.707s-.029.475-.07.707a3.958 3.958 0 01-.232.813c-.012.029-.028.057-.041.086-.044.1-.104.192-.156.287-.052-.096-.112-.188-.156-.287-.013-.029-.029-.057-.042-.087a4.015 4.015 0 01-.232-.813c-.042-.231-.071-.466-.071-.706s.029-.475.07-.707a3.985 3.985 0 01.232-.813c.012-.03.028-.057.041-.087.044-.099.104-.191.156-.287.052.096.112.188.157.288.013.029.029.057.042.086zm-9.751 38.158l-5.562-4.768 2.868-3.586 4.747 2.638v.079h.141l2.215 1.23-4.409 4.407zm12.147.042l-1.387-1.387-3.062-3.062 2.215-1.23h.14v-.079l4.826-2.682 3.651 3.651-6.383 4.789z" />
    </svg>
  );
}

export default Idea;
