import Image from 'next/image'
export const BottomRight = () => {
  return (
    <div className='bg_img bottom_right'>
      <Image
        src='/designs/flowers2.webp'
        width={500}
        height={500}
        alt='background image bottom'
      />
    </div>
  )
}
export const TopLeft = () => {
  return (
    <div className='bg_img top_left'>
      <Image
        src='/designs/flowers2.webp'
        width={500}
        height={500}
        alt='background image bottom'
      />
    </div>
  )
}
export const Cash = () => {
  return (
    <svg
      width='47'
      height='32'
      viewBox='0 0 47 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1.1986 24.3352C1.25973 24.3352 1.32143 24.327 1.38168 24.3107C2.39546 24.0354 3.29053 23.714 3.99291 23.434V26.0536C3.99291 26.2818 4.10439 26.4958 4.29184 26.6265C4.41031 26.7097 4.55032 26.7522 4.69149 26.7522C4.7727 26.7522 4.8542 26.7382 4.93221 26.7091C6.10411 26.2786 6.88853 25.9602 7.48584 25.7029V29.8303C7.48584 30.076 7.61479 30.3031 7.82523 30.4294C8.03539 30.5557 8.29706 30.5621 8.51362 30.4468C12.5362 28.2987 16.1626 27.1636 19.0001 27.1636C23.3965 27.1636 25.5173 28.2213 27.5679 29.2439C29.4272 30.1712 31.3498 31.13 34.7454 31.13C41.7449 31.13 46.1313 28.0542 46.3139 27.9235C46.4976 27.7923 46.6064 27.5804 46.6064 27.3551V8.69578C46.6064 8.4341 46.46 8.19426 46.2274 8.07463C45.9949 7.955 45.7151 7.97479 45.5018 8.1276C45.4901 8.13575 45.14 8.37764 44.5107 8.71557V5.78564C44.5107 5.52222 44.3613 5.28238 44.1265 5.16332C43.8907 5.04427 43.6083 5.06844 43.3961 5.22445C43.3842 5.23318 42.8347 5.62322 41.7164 6.05082V2.76314C41.7164 2.50555 41.5723 2.27035 41.3452 2.1484C41.1182 2.02731 40.8405 2.04186 40.626 2.18478C40.6085 2.19642 38.8359 3.34967 34.9998 3.34967C31.9022 3.34967 30.5985 2.67641 29.0893 1.89693C27.3681 1.00767 25.4171 0 20.6348 0C15.824 0 7.48664 1.91176 0.861516 5.56619C0.638553 5.68932 0.5 5.92364 0.5 6.17803V23.6369C0.5 23.8546 0.601297 24.0595 0.774194 24.192C0.897315 24.286 1.04693 24.3355 1.19858 24.3355L1.1986 24.3352ZM43.8122 10.6125C44.0617 10.5031 44.2969 10.3951 44.5108 10.2912C44.7696 10.1651 45.0042 10.0443 45.2094 9.93313V26.9769C44.1543 27.6284 40.3146 29.7334 34.7452 29.7334C31.6788 29.7334 30.0624 28.9275 28.1917 27.9942C26.0983 26.9501 23.726 25.7669 19.0003 25.7669C16.1848 25.7669 12.705 26.7723 8.88341 28.6835V11.5927C12.7591 9.57092 16.2499 8.50446 19.0003 8.50446C23.3967 8.50446 25.5175 9.5622 27.568 10.5848C28.1793 10.8898 28.803 11.1949 29.4778 11.4713C30.856 12.036 32.466 12.4712 34.7453 12.4712C38.2632 12.4712 41.1181 11.6943 43.1141 10.9049C43.3612 10.8071 43.5923 10.7096 43.8127 10.6129L43.8122 10.6125ZM43.1137 6.98049V9.38479C41.2447 10.1858 38.3624 11.0733 34.7449 11.0733C33.3731 11.0733 32.2996 10.9062 31.3556 10.6446C30.1893 10.3212 29.2253 9.84992 28.1911 9.33413C26.0976 8.29003 23.7254 7.1068 18.9996 7.1068C15.9335 7.1068 12.0799 8.29904 7.85517 10.5546C7.62842 10.6763 7.48609 10.9132 7.48609 11.1711V24.1762C6.98865 24.4003 6.36606 24.6704 5.39036 25.0456V9.19035C10.7414 6.68769 15.3195 5.03412 20.116 5.03412C24.2795 5.03412 26.1598 5.95565 27.9788 6.84663C29.6956 7.68812 31.4705 8.55786 34.9099 8.55786C35.3526 8.55786 35.7697 8.54244 36.179 8.52293C39.607 8.35935 41.8835 7.56527 43.1138 6.98055L43.1137 6.98049ZM1.89792 6.59307C8.25472 3.18111 16.09 1.39737 20.6355 1.39737C25.0778 1.39737 26.7914 2.28253 28.4484 3.13826C29.98 3.92879 31.5635 4.74704 35.0002 4.74704C37.5532 4.74704 39.3008 4.27463 40.3196 3.87641L40.3199 6.39419C40.3199 6.42971 40.335 6.46027 40.3399 6.49433C38.9955 6.85875 37.1998 7.1606 34.9103 7.1606C31.7949 7.1606 30.24 6.39853 28.5936 5.59198C26.7234 4.67537 24.6033 3.63686 20.1161 3.63686C14.9408 3.63686 10.0878 5.42693 4.39413 8.11536C4.14993 8.23033 3.99391 8.47658 3.99391 8.7467V21.9232C3.46153 22.1496 2.74287 22.434 1.89817 22.7024L1.89792 6.59307Z'
        fill='black'
      ></path>
      <path
        d='M27.3946 14.7774C24.8867 14.7774 22.8538 16.8102 22.8538 19.3182C22.8538 20.7199 23.4898 21.9728 24.4882 22.8058C24.7944 23.0614 25.1364 23.2742 25.5031 23.4427C26.0798 23.7073 26.7186 23.8589 27.3946 23.8589C28.2713 23.8589 29.0872 23.6063 29.7813 23.1758C30.1225 22.9642 30.4331 22.7098 30.7061 22.4181C31.4663 21.6063 31.9353 20.5183 31.9353 19.3181C31.9353 16.8103 29.9024 14.7773 27.3945 14.7773L27.3946 14.7774Z'
        fill='black'
      ></path>
      <path
        d='M42.7972 13.3726C42.6001 13.244 42.3507 13.2239 42.1347 13.3173C41.2219 13.7164 39.4262 14.006 39.4085 14.0092C39.0275 14.07 38.7678 14.4281 38.8287 14.8087C38.8895 15.19 39.2498 15.4465 39.6282 15.3889C39.6876 15.3792 40.7369 15.2101 41.7161 14.9339V21.7634C41.7161 22.0518 41.8914 22.2989 42.1408 22.4055C42.2249 22.4416 42.3175 22.4619 42.4147 22.4619C42.5364 22.4619 42.6449 22.4226 42.7445 22.3679C42.9608 22.2492 43.1133 22.0276 43.1133 21.7634V13.9572C43.1133 13.7214 42.9942 13.5013 42.7972 13.3724V13.3726Z'
        fill='black'
      ></path>
      <path
        d='M14.6043 22.5097C13.74 22.6712 12.955 22.9099 12.3764 23.1122V16.1742C12.3764 15.7885 12.0635 15.4756 11.6778 15.4756C11.2922 15.4756 10.9792 15.7885 10.9792 16.1742V24.1339C10.9792 24.2069 10.9941 24.2771 11.0159 24.3449C11.0645 24.4971 11.1612 24.6316 11.2988 24.7207C11.4138 24.7946 11.5454 24.8324 11.6781 24.8324C11.7756 24.8324 11.8734 24.8121 11.9654 24.7704C11.975 24.7664 12.6605 24.4622 13.6211 24.1828C14.0003 24.0724 14.418 23.9656 14.8605 23.883C15.1349 23.832 15.3372 23.6248 15.4036 23.3715C15.4289 23.2749 15.4385 23.173 15.4187 23.0679C15.348 22.6887 14.9848 22.4357 14.6043 22.5094L14.6043 22.5097Z'
        fill='black'
      ></path>
    </svg>
  )
}

export const WishList = () => {
  return (
    <svg
      width='41'
      height='44'
      viewBox='0 0 41 44'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M9.3437 29.0276H25.0288V30.4536H9.3437V29.0276ZM9.3437 33.3053H25.0288V31.8794H9.3437V33.3053ZM37.6074 43.9997H5.93168V43.9489H5.77893H5.67698C5.01483 43.9489 4.40384 43.6434 3.84365 43.0832C-1.55437 37.634 0.278948 2.18991 0.380891 0.662143V0H33.7881L33.7373 0.76374C33.7373 1.01844 32.3622 26.8377 35.0105 37.9395H40.3577L40.4085 38.6016C40.4593 38.7544 40.8156 43.4907 37.6075 44L37.6074 43.9997ZM7.40852 38.6524L7.35773 37.8887H8.12146L33.5843 37.9395C31.1908 27.4488 32.1076 5.80539 32.3111 1.42578H1.75576C1.24635 12.0183 0.839277 38.0413 4.86222 42.1663C5.16772 42.4718 5.42242 42.5737 5.72791 42.5737C7.61243 42.2679 7.40852 38.7033 7.40852 38.6524ZM39.0334 39.3654L8.83444 39.3142C8.83444 40.1799 8.68169 41.555 8.01955 42.5734H37.4546C38.7788 42.3191 39.0335 40.3838 39.0335 39.3654L39.0334 39.3654ZM17.1862 8.45348C18.2559 8.45348 19.1215 7.58779 19.1215 6.51822C19.1215 5.4486 18.2558 4.58295 17.1862 4.58295C16.1166 4.58295 15.251 5.44864 15.251 6.51822C15.2513 7.58784 16.117 8.45348 17.1862 8.45348ZM17.1354 25.8191C17.7976 25.3609 22.4315 21.8978 24.0613 19.148C24.927 17.6713 25.131 16.3982 25.0798 15.5321C25.029 14.5644 24.6723 13.6479 23.9086 13.0366C23.2464 12.4256 22.126 11.9162 20.4965 12.2729C17.5429 12.935 17.0338 15.4813 17.0338 15.4813C17.0334 15.4813 16.6771 12.8331 13.6726 12.1713C12.094 11.8146 10.9735 12.3748 10.2606 12.935C9.54764 13.546 9.14021 14.4629 9.08938 15.4305C9.03858 16.2962 9.24213 17.5694 10.1078 19.0464C11.7881 21.847 17.1353 25.8192 17.1353 25.8192L17.1354 25.8191Z'
        fill='black'
      ></path>
    </svg>
  )
}

export const STDCard = () => {
  return (
    <span
      className='STD_card'
      style={{
        color: 'transparent',
        // height: '100%',
        // width: '100%',
      }}
    >
      <Image
        src='/engagement/STD3.png'
        width={2000}
        height={2000}
        alt='invitationCard'
        className='img'
      />
    </span>
  )
}
export const Flower = () => {
  return (
    <svg width='35' height='78' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M20.355 12.083c-1.643-1.62-2.156-4.77.41-5.83 1.187-.49 2.68-.365 3.928-.227 1.286.143 2.552.417 3.77.856 2.173.785 5.184 2.164 6.027 4.51.993 2.762-1.968 4.107-4.155 4.474-2.775.465-5.706.417-8.513.338-2.694-.076-5.454-.375-7.98-1.366-2.27-.892-4.59-2.333-5.723-4.58-1.043-2.066-.836-4.541.475-6.444C10.4 1.193 13.422.69 16.381.337A49.462 49.462 0 0 1 27.307.27c1.2.123 1.212 2.017 0 1.893a49.877 49.877 0 0 0-7.412-.223c-2.265.105-4.671.24-6.85.902-1.807.549-3.232 1.882-3.627 3.77-.414 1.978.708 3.732 2.23 4.903 3.25 2.5 7.672 2.811 11.615 2.817 2.225.004 4.55.074 6.745-.32.804-.144 1.895-.32 2.484-.957.814-.88-.32-1.938-1.01-2.467-1.83-1.406-4.144-2.283-6.416-2.619-.979-.145-2.579-.413-3.52 0-1.294.57-.576 2.063.147 2.777.87.856-.47 2.194-1.338 1.338Z'
        fill='#211D1D'
      ></path>
      <path
        d='M34.023 13.727c-1.494 5.45-3.158 10.933-7.099 15.157a22.39 22.39 0 0 1-6.03 4.581c-2.323 1.205-5.13 2.385-7.781 1.828-1.19-.25-.687-2.075.503-1.825 2.292.48 5.02-.888 6.97-1.986a20.808 20.808 0 0 0 5.396-4.373c3.446-3.904 4.869-8.97 6.216-13.884.32-1.174 2.147-.676 1.825.502Z'
        fill='#211D1D'
      ></path>
      <path
        d='M9.028 7.923c-1.266 8.344-2.59 18.37 3.722 25.133.83.89-.505 2.231-1.338 1.339-6.84-7.331-5.587-17.893-4.21-26.974.183-1.2 2.006-.69 1.826.502Z'
        fill='#211D1D'
      ></path>
      <path
        d='M14.877 34.343c-1.918 14.074-1.349 28.46 1.636 42.344.255 1.187-1.569 1.695-1.825.503a125.654 125.654 0 0 1-1.636-43.35c.164-1.202 1.988-.69 1.825.503Z'
        fill='#211D1D'
      ></path>
      <path
        d='M10.34 60.891c-.416-4.656-3.845-8.86-8.29-10.26-1.158-.365-.664-2.193.502-1.825 5.301 1.67 9.186 6.562 9.68 12.085.108 1.212-1.785 1.205-1.893 0Z'
        fill='#211D1D'
      ></path>
      <path
        d='M3.197 49.92c-.73 1.386-.92 2.937-.96 4.484-.037 1.476-.259 3.246.739 4.46.92 1.12 2.271 1.956 3.53 2.643a17.595 17.595 0 0 0 4.402 1.662c1.184.28.683 2.105-.503 1.825a19.37 19.37 0 0 1-5.07-1.974c-1.515-.855-3.106-1.922-4.12-3.362C.153 58.15.3 56.163.345 54.404c.049-1.89.327-3.75 1.217-5.44.569-1.077 2.202-.122 1.635.956Z'
        fill='#211D1D'
      ></path>
      <path
        d='M7.919 58.026c1.36 1.72 2.723 3.44 4.084 5.16.306.388.406.965 0 1.339-.342.313-1.01.414-1.338 0L6.58 59.363c-.306-.387-.406-.965 0-1.337.342-.314 1.01-.415 1.339 0ZM12.629 51.884a28.08 28.08 0 0 1 17.418-6.628c1.219-.03 1.218 1.863 0 1.892-5.863.14-11.594 2.288-16.08 6.074-.926.782-2.27-.55-1.338-1.338Z'
        fill='#211D1D'
      ></path>
      <path
        d='M32.267 46.673c-1.21 4.234-4.072 8.142-8.054 10.15-3.783 1.906-8.623 1.753-11.649-1.48-.831-.889.504-2.23 1.338-1.338 2.6 2.776 6.735 2.676 9.872.907 3.297-1.857 5.638-5.138 6.669-8.742.334-1.169 2.16-.672 1.824.503Z'
        fill='#211D1D'
      ></path>
      <path
        d='M14.35 53.138a40.707 40.707 0 0 1 5.912-1.533c.485-.087 1.043.132 1.163.661.105.463-.14 1.07-.66 1.165a40.616 40.616 0 0 0-5.913 1.533c-.468.16-1.054-.184-1.163-.661-.12-.526.158-.993.66-1.165Z'
        fill='#211D1D'
      ></path>
    </svg>
  )
}
