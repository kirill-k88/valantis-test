import { FC } from 'react';

import styles from './Header.module.scss';

export const Header: FC = () => {
  return (
    <div className={styles.header}>
      <a
        aria-label="на главную"
        className={styles.header__headertoplogo}
        href="/">
        <svg
          width="144"
          height="34"
          viewBox="0 0 144 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M55.214 26.4438H59.4746L64.9542 8.74758H61.9609L57.3141 23.5682L52.7276 8.74758H49.7344L55.214 26.4438Z"
            fill="#20232E"></path>
          <path
            d="M69.3283 26.8125C70.3663 26.8125 71.2474 26.6405 71.9715 26.2964C72.7038 25.9441 73.3475 25.3993 73.9027 24.6619V26.4438H76.4494V18.2962C76.4494 17.7227 76.4252 17.1943 76.377 16.7109C76.3287 16.2193 76.1879 15.7401 75.9545 15.2731C75.5281 14.3965 74.8723 13.7656 73.9872 13.3806C73.1101 12.9955 72.0922 12.803 70.9336 12.803C69.4047 12.803 68.1857 13.143 67.2765 13.823C66.3672 14.503 65.7517 15.4042 65.4298 16.5266L68.0851 17.3745C68.3024 16.6945 68.6846 16.2152 69.2317 15.9367C69.7789 15.6581 70.3462 15.5189 70.9336 15.5189C71.8187 15.5189 72.4704 15.7032 72.8888 16.0719C73.3072 16.4323 73.5446 16.9935 73.6009 17.7555C72.4584 17.9275 71.3962 18.0955 70.4146 18.2593C69.4409 18.415 68.6122 18.6075 67.9282 18.8369C66.8983 19.1974 66.1459 19.7094 65.6712 20.373C65.1965 21.0285 64.9591 21.8395 64.9591 22.8063C64.9591 23.5354 65.124 24.2031 65.4539 24.8094C65.7919 25.4156 66.2867 25.9031 66.9385 26.2718C67.5903 26.6323 68.3869 26.8125 69.3283 26.8125ZM69.9076 24.453C69.2237 24.453 68.7007 24.2932 68.3386 23.9737C67.9845 23.6542 67.8075 23.2528 67.8075 22.7694C67.8075 22.3352 67.9443 21.9829 68.2179 21.7125C68.4995 21.4422 68.8898 21.2128 69.3886 21.0244C69.8473 20.8687 70.3985 20.7335 71.0422 20.6188C71.6859 20.4959 72.5267 20.3526 73.5647 20.1887C73.5567 20.5 73.5366 20.8482 73.5044 21.2333C73.4722 21.6101 73.3958 21.9501 73.2751 22.2533C73.1785 22.5564 72.9894 22.88 72.7078 23.2241C72.4342 23.5682 72.0641 23.859 71.5974 24.0966C71.1307 24.3342 70.5674 24.453 69.9076 24.453Z"
            fill="#20232E"></path>
          <path
            d="M79.833 26.4438H82.7418V8.37891H79.833V26.4438Z"
            fill="#20232E"></path>
          <path
            d="M90.0023 26.8125C91.0402 26.8125 91.9213 26.6405 92.6455 26.2964C93.3777 25.9441 94.0214 25.3993 94.5766 24.6619V26.4438H97.1233V18.2962C97.1233 17.7227 97.0992 17.1943 97.0509 16.7109C97.0026 16.2193 96.8618 15.7401 96.6285 15.2731C96.202 14.3965 95.5462 13.7656 94.6611 13.3806C93.7841 12.9955 92.7662 12.803 91.6075 12.803C90.0787 12.803 88.8597 13.143 87.9504 13.823C87.0412 14.503 86.4256 15.4042 86.1038 16.5266L88.7591 17.3745C88.9763 16.6945 89.3585 16.2152 89.9057 15.9367C90.4529 15.6581 91.0201 15.5189 91.6075 15.5189C92.4926 15.5189 93.1444 15.7032 93.5628 16.0719C93.9812 16.4323 94.2186 16.9935 94.2749 17.7555C93.1323 17.9275 92.0702 18.0955 91.0885 18.2593C90.1149 18.415 89.2861 18.6075 88.6022 18.8369C87.5722 19.1974 86.8199 19.7094 86.3452 20.373C85.8704 21.0285 85.633 21.8395 85.633 22.8063C85.633 23.5354 85.798 24.2031 86.1279 24.8094C86.4659 25.4156 86.9607 25.9031 87.6125 26.2718C88.2642 26.6323 89.0608 26.8125 90.0023 26.8125ZM90.5816 24.453C89.8977 24.453 89.3746 24.2932 89.0125 23.9737C88.6585 23.6542 88.4815 23.2528 88.4815 22.7694C88.4815 22.3352 88.6183 21.9829 88.8918 21.7125C89.1735 21.4422 89.5637 21.2128 90.0626 21.0244C90.5212 20.8687 91.0724 20.7335 91.7161 20.6188C92.3599 20.4959 93.2007 20.3526 94.2387 20.1887C94.2306 20.5 94.2105 20.8482 94.1783 21.2333C94.1462 21.6101 94.0697 21.9501 93.949 22.2533C93.8525 22.5564 93.6634 22.88 93.3818 23.2241C93.1082 23.5682 92.738 23.859 92.2713 24.0966C91.8047 24.3342 91.2414 24.453 90.5816 24.453Z"
            fill="#20232E"></path>
          <path
            d="M100.241 26.4438H103.186V19.6234C103.186 18.5502 103.335 17.7227 103.633 17.141C103.939 16.5511 104.325 16.1456 104.792 15.9244C105.266 15.695 105.749 15.5803 106.24 15.5803C106.932 15.5803 107.483 15.736 107.894 16.0473C108.304 16.3504 108.606 16.7396 108.799 17.2147C109 17.6817 109.129 18.1692 109.185 18.6771C109.249 19.1851 109.282 19.6439 109.282 20.0535V26.4438H112.227V19.0335C112.227 18.7222 112.198 18.3085 112.142 17.7923C112.094 17.2762 111.981 16.7314 111.804 16.1579C111.627 15.5844 111.354 15.0437 110.983 14.5357C110.613 14.0196 110.11 13.6018 109.475 13.2822C108.847 12.9545 108.055 12.7907 107.097 12.7907C106.156 12.7907 105.327 12.9586 104.611 13.2945C103.903 13.6222 103.311 14.0728 102.836 14.6463V13.1716H100.241V26.4438Z"
            fill="#20232E"></path>
          <path
            d="M123.016 26.4438V23.9614C122.204 24.0843 121.479 24.1171 120.844 24.0598C120.208 24.0024 119.745 23.728 119.456 23.2364C119.303 22.9824 119.218 22.6547 119.202 22.2533C119.194 21.8436 119.19 21.3766 119.19 20.8523V15.4943H123.016V13.1716H119.19V9.48492H116.293V13.1716H113.928V15.4943H116.293V21.0244C116.293 21.7863 116.302 22.4663 116.318 23.0643C116.334 23.6542 116.491 24.2359 116.788 24.8094C117.126 25.4402 117.621 25.9031 118.273 26.1981C118.925 26.4848 119.661 26.6364 120.482 26.6527C121.31 26.6773 122.155 26.6077 123.016 26.4438Z"
            fill="#20232E"></path>
          <path
            d="M126.061 11.1562H128.969V8.44035H126.061V11.1562ZM126.061 26.4438H128.969V13.1716H126.061V26.4438Z"
            fill="#20232E"></path>
          <path
            d="M137.618 26.8125C139.3 26.8125 140.615 26.4315 141.565 25.6696C142.522 24.9077 143.001 23.859 143.001 22.5236C143.001 21.4913 142.679 20.6803 142.035 20.0904C141.4 19.5005 140.301 19.0008 138.74 18.5911C137.727 18.329 136.962 18.1078 136.447 17.9275C135.94 17.7473 135.602 17.567 135.433 17.3868C135.264 17.2066 135.18 16.9894 135.18 16.7355C135.18 16.2931 135.389 15.949 135.807 15.7032C136.226 15.4492 136.777 15.3386 137.461 15.3714C138.169 15.4123 138.736 15.5967 139.163 15.9244C139.597 16.2521 139.855 16.6986 139.935 17.2639L142.904 16.7232C142.743 15.527 142.168 14.5767 141.178 13.8721C140.189 13.1594 138.933 12.803 137.413 12.803C135.86 12.803 134.617 13.1716 133.683 13.909C132.75 14.6463 132.283 15.6376 132.283 16.8829C132.283 17.8743 132.609 18.6567 133.261 19.2302C133.921 19.8036 135.067 20.3075 136.701 20.7417C137.682 21.0039 138.406 21.2251 138.873 21.4053C139.348 21.5774 139.658 21.7535 139.803 21.9337C139.947 22.114 140.02 22.3557 140.02 22.6588C140.02 23.1504 139.827 23.5395 139.44 23.8263C139.054 24.1048 138.515 24.2441 137.823 24.2441C137.026 24.2441 136.363 24.0557 135.832 23.6788C135.309 23.3019 134.975 22.7858 134.83 22.1304L131.861 22.5974C132.078 23.9328 132.689 24.9691 133.695 25.7065C134.701 26.4438 136.009 26.8125 137.618 26.8125Z"
            fill="#20232E"></path>
          <g clipPath="url(#clip0_3798_60690)">
            <path
              d="M15.761 21.8024C14.677 22.021 13.3183 22.8139 13.3183 22.8139C13.3183 22.8139 14.0595 23.1424 14.4234 23.4883C14.7737 23.8212 14.9476 24.0557 15.1213 24.4998C15.3942 25.1978 15.1213 26.4105 15.1213 26.4105C15.1213 26.4105 16.221 27.4853 16.8079 28.265C17.2341 28.8313 17.7966 29.7823 17.7966 29.7823C17.7966 29.7823 18.1496 29.8754 18.32 30.0071C18.4903 30.1387 18.6689 30.4566 18.6689 30.4566C18.6689 30.4566 18.6406 31.2108 18.9016 31.5806C19.1607 31.9477 19.4133 32.078 19.8903 32.1987C20.3672 32.3194 21.3442 32.1987 21.3442 32.1987L21.4606 31.5806L22.1585 32.0301C22.1585 32.0301 22.0425 30.9511 21.5769 30.4566C20.9382 29.7783 19.1924 29.6137 19.1924 29.6137C19.1924 29.1192 19.5801 28.9581 19.774 28.9393C19.774 28.9393 19.0761 28.3774 18.32 27.703C17.5639 27.0287 16.9455 26.5782 16.866 26.0171C16.8025 25.5689 16.7978 25.3544 17.1568 24.8932C17.4329 24.5385 17.9303 24.2492 18.2037 23.9378C18.682 23.3929 19.4832 22.5891 19.4832 22.5891C19.4832 22.5891 18.9597 22.0834 18.32 21.9148C17.6802 21.7462 16.6948 21.614 15.761 21.8024Z"
              fill="#A52838"></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M43.3281 16.6885C43.3281 16.6885 44.2601 17.4413 44.4913 18.0372C44.6986 18.5715 44.4913 19.3297 44.4913 19.3297C44.4913 19.3297 46.2199 20.8401 46.9921 21.0156C47.7644 21.1912 48.4461 20.2289 48.4461 20.2289C48.4461 20.2289 48.3006 21.5104 47.3992 21.9148C45.7708 22.6453 44.6658 21.0156 44.6658 21.0156C44.6658 21.0156 43.5888 22.7436 43.0955 23.9378C42.9442 24.3042 42.8722 24.7071 42.8016 25.1024C42.667 25.8553 42.5374 26.5806 41.8742 26.9725C41.323 27.2981 40.5947 27.0287 40.5947 27.0287C40.5947 27.0287 39.7158 26.7038 39.3152 26.2981C38.9016 25.8793 38.9516 25.4537 39.0086 24.9693C39.0596 24.5354 39.1161 24.0542 38.8499 23.4883C38.6439 23.0503 38.4199 22.6915 38.21 22.3552C37.8273 21.7421 37.4914 21.2038 37.3959 20.3975C37.2948 19.5426 37.3901 19.0178 37.6286 18.2058C37.8671 17.3938 38.8499 16.1265 38.8499 16.1265C38.8499 16.1265 37.8942 16.7447 37.2796 17.4752C36.665 18.2058 35.8838 19.8917 35.8838 19.8917C35.8838 19.8917 35.5435 19.6882 35.4185 18.7116C35.2936 17.735 35.2441 14.4968 35.2441 14.4968C35.2441 14.4968 34.7647 16.2642 34.6625 17.3067C34.6436 17.499 34.6209 17.6803 34.599 17.8544C34.5024 18.6242 34.4235 19.2525 34.7788 20.0603C35.1865 20.9873 35.9426 21.6784 36.665 22.3388C37.6944 23.2798 38.6555 24.1583 38.4428 25.5675C38.299 26.5201 37.4541 27.3658 37.4541 27.3658L34.3717 30.1757L33.2085 29.9509L33.6156 31.1872L31.1148 31.3558C31.1148 31.3558 31.1003 30.5055 31.2893 30.0071C31.4541 29.5724 31.929 28.9955 31.929 28.9955C31.929 28.9955 32.9853 29.3316 33.383 28.9393C33.5607 28.7641 33.6738 28.3774 33.6738 28.3774L32.2198 28.6022C32.2198 28.6022 32.8579 28.1925 33.2667 27.984C33.6755 27.7755 34.4298 27.5906 34.4298 27.5906C34.4298 27.5906 35.7973 27.0319 36.2328 25.9609C36.5269 25.2375 35.411 24.6336 34.1871 23.9712C33.583 23.6443 32.9526 23.3031 32.4525 22.9263C31.9974 22.5835 31.5789 22.3432 31.1808 22.1146C30.526 21.7386 29.9268 21.3945 29.3119 20.6784C28.6644 19.9245 28.4027 19.2263 28.3232 18.2058C28.2437 17.1853 28.614 15.396 28.614 15.396C28.614 15.396 27.7957 16.8275 27.6254 17.9248C27.455 19.0221 27.4758 20.054 28.1487 21.0718C29.4864 23.0949 32.2198 23.7693 32.2198 23.7693V24.1626C32.2198 24.1626 29.771 25.4462 28.5559 26.4667C28.3946 26.6021 28.1854 26.744 27.9572 26.8987C27.4443 27.2466 26.8357 27.6593 26.4622 28.2088C25.7497 29.2569 25.5898 30.569 25.5898 30.569C25.5898 30.569 27.1739 30.7702 27.7417 31.1872C28.3095 31.6042 28.5559 32.5359 28.5559 32.5359L27.7417 31.974V32.5359H25.4154C25.4154 32.5359 25.8699 31.6368 25.299 30.9624C24.7282 30.2881 23.8451 30.85 23.8451 30.85L23.9614 29.7823C23.9614 29.7823 24.5702 28.6245 25.299 27.4782C25.5025 27.1583 25.7391 26.8437 25.9582 26.5524C26.1513 26.2957 26.3309 26.057 26.4622 25.8485C27.2764 24.556 26.9856 24.3312 26.9856 24.3312C26.9856 24.3312 27.8335 24.2394 28.2651 24.1626C28.6966 24.0858 29.3119 23.8816 29.3119 23.8816C29.3119 23.8816 26.4579 23.3713 24.7756 22.9825C22.6431 22.4897 21.9021 22.3127 19.774 21.8024C19.398 21.7122 19.0483 21.5807 18.7026 21.4506C18.0652 21.2108 17.4413 20.9761 16.6915 21.0156C15.5511 21.0758 13.6673 21.9148 13.6673 21.9148C13.6673 21.9148 14.4295 21.0239 14.7723 20.2851C15.1284 19.5175 15.6447 17.6438 15.6447 17.6438C15.6447 17.6438 12.6028 22 11.1083 23.6007C9.58053 25.237 7.38615 26.5791 7.38615 26.5791C7.38615 26.5791 4.55392 25.7839 2.90793 26.5791C2.53324 26.7601 2.67324 27.3327 2.83841 28.0081C3.03216 28.8005 3.26054 29.7344 2.73346 30.3443C2.58933 30.511 2.32635 30.7376 2.32635 30.7376L1.91924 31.0748C1.91924 31.0748 2.88245 31.023 3.43136 31.2434C3.86778 31.4187 4.10255 31.5795 4.42006 31.9178C4.85701 32.3832 5.11797 33.3789 5.11797 33.3789L3.95479 32.4235V33.4913C3.95479 33.4913 3.23451 33.5461 2.79162 33.4913C2.34873 33.4364 1.6866 33.2103 1.6866 33.2103C1.6866 33.2103 1.82166 32.3689 1.57028 31.9178C1.34186 31.5079 0.581587 31.0748 0.581587 31.0748L0 31.2996C0 31.2996 0.894478 30.5792 1.33765 29.5575C2.08577 27.8328 1.6866 24.7808 1.6866 24.7808C1.6866 24.7808 4.21046 24.7565 5.00165 23.1511C5.8335 21.4631 5.7135 19.6602 5.57765 17.619C5.52354 16.806 5.46692 15.9552 5.46692 15.0588C5.46692 13.9006 5.68895 13.0666 5.99035 12.1366C6.22403 11.4155 6.74641 10.6211 6.74641 10.6211C6.74641 10.6211 7.09536 10.1716 6.57193 9.60961C6.0485 9.04764 5.86845 9.03124 5.57765 8.69407C5.28686 8.35689 4.15468 6.82305 5.99035 5.84444C7.67695 4.9453 10.4477 5.41569 13.0275 5.41569C14.5397 5.41569 17.6221 4.86182 18.4363 3.2594C19.2505 1.65698 18.7514 1.9843 19.3668 1.29252C20.102 0.466278 21.9258 0 21.9258 0C21.9258 0 21.4889 1.77445 20.7045 2.58504C20.2266 3.07887 19.792 3.16847 19.2505 3.59658C17.971 4.60812 17.7966 4.99768 15.8773 5.56346C12.446 6.575 11.1196 5.79698 8.43301 6.12542C5.67491 6.4626 6.48849 8.1563 7.87606 8.69407C7.87606 8.69407 9.06278 8.86153 9.82882 8.87905C10.6475 8.89778 11.1083 8.77156 11.9225 8.76666C12.7368 8.76177 13.1252 8.76869 13.6091 8.76666C14.5562 8.7627 15.0004 8.80375 15.7028 8.70858C18.4917 8.33078 20.3366 6.86712 22.1661 5.41569L22.1661 5.41562L22.1664 5.41545C24.3295 3.69929 26.4711 2.00026 30.1261 2.13354C37.3959 2.39862 43.0373 13.2605 43.0373 13.2605C43.0373 13.2605 41.816 12.4738 41.0599 13.5415C40.3039 14.6092 41.0018 15.7893 41.0018 15.7893C41.0018 15.7893 41.1405 14.8616 41.5834 14.6092C42.0263 14.3568 42.6436 14.3513 43.27 14.553C43.5509 14.6435 43.8252 14.7912 44.1047 14.9418C44.5196 15.1652 44.9459 15.3948 45.4218 15.4522C46.3511 15.5641 47.4574 14.7778 47.4574 14.7778C47.4574 14.7778 47.3101 15.5629 46.9921 15.9579C46.6742 16.353 46.3534 16.5905 45.829 16.8009C45.5282 16.9215 44.9341 16.8079 44.4466 16.7147C44.2655 16.6801 44.099 16.6482 43.9679 16.6323C43.3924 16.5624 43.3281 16.6885 43.3281 16.6885ZM42.5139 20.7908C42.5924 21.1447 42.3394 21.6338 42.3394 21.6338C42.3394 21.6338 42.0459 21.1653 41.9323 20.847C41.8188 20.5288 41.7578 20.0041 41.7578 20.0041C41.7578 20.0041 42.0251 20.0312 42.165 20.1165C42.3999 20.2598 42.4449 20.4698 42.4981 20.7179L42.4982 20.7185L42.502 20.7359C42.5058 20.754 42.5098 20.7723 42.5139 20.7908Z"
              fill="#A52838"></path>
          </g>
          <defs>
            <clipPath id="clip0_3798_60690">
              <rect
                width="48.7339"
                height="33.5156"
                fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
      </a>
    </div>
  );
};
