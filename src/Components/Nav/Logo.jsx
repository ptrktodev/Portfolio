import React from "react";

const Logo = ({ wid, hei }) => {
  return (
    <div>
      <svg
        width={wid}
        height={hei}
        viewBox="0 0 60 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.47727 4.59801V3.27273H13.4403V4.59801H10.7429V12H9.17472V4.59801H6.47727ZM16.663 12.1278C16.0067 12.1278 15.44 11.9915 14.9627 11.7188C14.4883 11.4432 14.1232 11.054 13.8675 10.5511C13.6119 10.0455 13.484 9.45028 13.484 8.76562C13.484 8.09233 13.6119 7.50142 13.8675 6.9929C14.1261 6.48153 14.4869 6.08381 14.9499 5.79972C15.413 5.51278 15.957 5.36932 16.582 5.36932C16.9854 5.36932 17.3661 5.43466 17.7241 5.56534C18.0849 5.69318 18.4031 5.89205 18.6786 6.16193C18.957 6.43182 19.1758 6.77557 19.3349 7.19318C19.494 7.60795 19.5735 8.10227 19.5735 8.67614V9.14915H14.2085V8.10938H18.0948C18.092 7.81392 18.0281 7.55114 17.9031 7.32102C17.7781 7.08807 17.6033 6.90483 17.3789 6.77131C17.1573 6.63778 16.8988 6.57102 16.6033 6.57102C16.288 6.57102 16.011 6.64773 15.7724 6.80114C15.5337 6.9517 15.3477 7.15057 15.2141 7.39773C15.0835 7.64205 15.0167 7.91051 15.0138 8.20312V9.1108C15.0138 9.49148 15.0835 9.81818 15.2227 10.0909C15.3619 10.3608 15.5565 10.5682 15.8065 10.7131C16.0565 10.8551 16.3491 10.9261 16.6843 10.9261C16.9087 10.9261 17.1119 10.8949 17.2937 10.8324C17.4755 10.767 17.6332 10.6719 17.7667 10.5469C17.9002 10.4219 18.0011 10.267 18.0692 10.0824L19.5096 10.2443C19.4187 10.625 19.2454 10.9574 18.9897 11.2415C18.7369 11.5227 18.413 11.7415 18.0181 11.8977C17.6232 12.0511 17.1715 12.1278 16.663 12.1278ZM23.7337 12.1278C23.0803 12.1278 22.5192 11.9844 22.0504 11.6974C21.5845 11.4105 21.2251 11.0142 20.9723 10.5085C20.7223 10 20.5973 9.41477 20.5973 8.75284C20.5973 8.08807 20.7251 7.50142 20.9808 6.9929C21.2365 6.48153 21.5973 6.08381 22.0632 5.79972C22.532 5.51278 23.0859 5.36932 23.7251 5.36932C24.2564 5.36932 24.7266 5.46733 25.1357 5.66335C25.5476 5.85653 25.8757 6.13068 26.12 6.4858C26.3643 6.83807 26.5036 7.25 26.5376 7.72159H25.0632C25.0036 7.40625 24.8615 7.14347 24.6371 6.93324C24.4155 6.72017 24.1186 6.61364 23.7464 6.61364C23.4311 6.61364 23.1541 6.69886 22.9155 6.86932C22.6768 7.03693 22.4908 7.27841 22.3572 7.59375C22.2266 7.90909 22.1612 8.28693 22.1612 8.72727C22.1612 9.1733 22.2266 9.55682 22.3572 9.87784C22.4879 10.196 22.6712 10.4418 22.907 10.6151C23.1456 10.7855 23.4254 10.8707 23.7464 10.8707C23.9737 10.8707 24.1768 10.8281 24.3558 10.7429C24.5376 10.6548 24.6896 10.5284 24.8118 10.3636C24.9339 10.1989 25.0178 9.99858 25.0632 9.76278H26.5376C26.5007 10.2259 26.3643 10.6364 26.1286 10.9943C25.8928 11.3494 25.5717 11.6278 25.1655 11.8295C24.7592 12.0284 24.282 12.1278 23.7337 12.1278ZM29.3469 8.16477V12H27.8043V3.27273H29.3129V6.56676H29.3896C29.543 6.19744 29.7802 5.90625 30.1012 5.69318C30.4251 5.47727 30.837 5.36932 31.337 5.36932C31.7915 5.36932 32.1879 5.46449 32.5259 5.65483C32.864 5.84517 33.1254 6.12358 33.31 6.49006C33.4975 6.85653 33.5913 7.30398 33.5913 7.83239V12H32.0487V8.07102C32.0487 7.63068 31.935 7.28835 31.7077 7.04403C31.4833 6.79687 31.168 6.6733 30.7617 6.6733C30.489 6.6733 30.2447 6.73295 30.0288 6.85227C29.8157 6.96875 29.6481 7.13778 29.5259 7.35938C29.4066 7.58097 29.3469 7.84943 29.3469 8.16477ZM36.4592 12L33.9961 3.27273H35.6964L37.2688 9.68608H37.3498L39.0288 3.27273H40.5756L42.2589 9.69034H42.3356L43.908 3.27273H45.6083L43.1452 12H41.5856L39.8384 5.87642H39.7702L38.0188 12H36.4592ZM48.8661 12.1278C48.2099 12.1278 47.6431 11.9915 47.1658 11.7188C46.6914 11.4432 46.3263 11.054 46.0707 10.5511C45.815 10.0455 45.6871 9.45028 45.6871 8.76562C45.6871 8.09233 45.815 7.50142 46.0707 6.9929C46.3292 6.48153 46.69 6.08381 47.1531 5.79972C47.6161 5.51278 48.1602 5.36932 48.7852 5.36932C49.1886 5.36932 49.5692 5.43466 49.9272 5.56534C50.288 5.69318 50.6062 5.89205 50.8817 6.16193C51.1602 6.43182 51.3789 6.77557 51.538 7.19318C51.6971 7.60795 51.7766 8.10227 51.7766 8.67614V9.14915H46.4116V8.10938H50.2979C50.2951 7.81392 50.2312 7.55114 50.1062 7.32102C49.9812 7.08807 49.8065 6.90483 49.582 6.77131C49.3604 6.63778 49.1019 6.57102 48.8065 6.57102C48.4911 6.57102 48.2141 6.64773 47.9755 6.80114C47.7369 6.9517 47.5508 7.15057 47.4173 7.39773C47.2866 7.64205 47.2198 7.91051 47.217 8.20312V9.1108C47.217 9.49148 47.2866 9.81818 47.4258 10.0909C47.565 10.3608 47.7596 10.5682 48.0096 10.7131C48.2596 10.8551 48.5522 10.9261 48.8874 10.9261C49.1119 10.9261 49.315 10.8949 49.4968 10.8324C49.6786 10.767 49.8363 10.6719 49.9698 10.5469C50.1033 10.4219 50.2042 10.267 50.2724 10.0824L51.7127 10.2443C51.6218 10.625 51.4485 10.9574 51.1928 11.2415C50.94 11.5227 50.6161 11.7415 50.2212 11.8977C49.8263 12.0511 49.3746 12.1278 48.8661 12.1278ZM53.1499 12V3.27273H54.6925V6.53693H54.7564C54.8359 6.37784 54.9482 6.20881 55.093 6.02983C55.2379 5.84801 55.4339 5.69318 55.6811 5.56534C55.9283 5.43466 56.2436 5.36932 56.6271 5.36932C57.1328 5.36932 57.5888 5.49858 57.995 5.7571C58.4041 6.01278 58.728 6.39205 58.9666 6.89489C59.2081 7.39489 59.3288 8.00852 59.3288 8.7358C59.3288 9.45455 59.2109 10.0653 58.9751 10.5682C58.7393 11.071 58.4183 11.4545 58.0121 11.7188C57.6058 11.983 57.1456 12.1151 56.6314 12.1151C56.2564 12.1151 55.9453 12.0526 55.6982 11.9276C55.451 11.8026 55.2521 11.652 55.1016 11.4759C54.9538 11.2969 54.8388 11.1278 54.7564 10.9688H54.6669V12H53.1499ZM54.6626 8.72727C54.6626 9.15057 54.7223 9.52131 54.8416 9.83949C54.9638 10.1577 55.1385 10.4062 55.3658 10.5852C55.5959 10.7614 55.8743 10.8494 56.201 10.8494C56.5419 10.8494 56.8274 10.7585 57.0575 10.5767C57.2876 10.392 57.4609 10.1406 57.5774 9.82244C57.6967 9.50142 57.7564 9.13636 57.7564 8.72727C57.7564 8.32102 57.6982 7.96023 57.5817 7.64489C57.4652 7.32955 57.2919 7.08239 57.0618 6.90341C56.8317 6.72443 56.5447 6.63494 56.201 6.63494C55.8714 6.63494 55.5916 6.72159 55.3615 6.89489C55.1314 7.06818 54.9567 7.31108 54.8374 7.62358C54.7209 7.93608 54.6626 8.30398 54.6626 8.72727ZM11.6037 20.6719C11.5639 20.2997 11.3963 20.0099 11.1009 19.8026C10.8082 19.5952 10.4276 19.4915 9.95881 19.4915C9.62926 19.4915 9.34659 19.5412 9.1108 19.6406C8.875 19.7401 8.6946 19.875 8.5696 20.0455C8.4446 20.2159 8.38068 20.4105 8.37784 20.6293C8.37784 20.8111 8.41903 20.9687 8.50142 21.1023C8.58665 21.2358 8.7017 21.3494 8.84659 21.4432C8.99148 21.5341 9.15199 21.6108 9.32812 21.6733C9.50426 21.7358 9.68182 21.7884 9.8608 21.831L10.679 22.0355C11.0085 22.1122 11.3253 22.2159 11.6293 22.3466C11.9361 22.4773 12.2102 22.642 12.4517 22.8409C12.696 23.0398 12.8892 23.2798 13.0312 23.5611C13.1733 23.8423 13.2443 24.1719 13.2443 24.5497C13.2443 25.0611 13.1136 25.5114 12.8523 25.9006C12.5909 26.2869 12.2131 26.5895 11.7188 26.8082C11.2273 27.0241 10.6321 27.1321 9.93324 27.1321C9.25426 27.1321 8.66477 27.027 8.16477 26.8168C7.66761 26.6065 7.27841 26.2997 6.99716 25.8963C6.71875 25.4929 6.56818 25.0014 6.54545 24.4219H8.10085C8.12358 24.7259 8.21733 24.9787 8.3821 25.1804C8.54688 25.3821 8.76136 25.5327 9.02557 25.6321C9.29261 25.7315 9.59091 25.7812 9.92045 25.7812C10.2642 25.7812 10.5653 25.7301 10.8239 25.6278C11.0852 25.5227 11.2898 25.3778 11.4375 25.1932C11.5852 25.0057 11.6605 24.7869 11.6634 24.5369C11.6605 24.3097 11.5938 24.1222 11.4631 23.9744C11.3324 23.8239 11.1491 23.6989 10.9134 23.5994C10.6804 23.4972 10.4077 23.4062 10.0952 23.3267L9.10227 23.071C8.38352 22.8864 7.81534 22.6065 7.39773 22.2315C6.98295 21.8537 6.77557 21.3523 6.77557 20.7273C6.77557 20.2131 6.91477 19.7628 7.19318 19.3764C7.47443 18.9901 7.85653 18.6903 8.33949 18.4773C8.82244 18.2614 9.36932 18.1534 9.98011 18.1534C10.5994 18.1534 11.142 18.2614 11.608 18.4773C12.0767 18.6903 12.4446 18.9872 12.7116 19.3679C12.9787 19.7457 13.1165 20.1804 13.125 20.6719H11.6037ZM15.5444 29.4545C15.3342 29.4545 15.1396 29.4375 14.9606 29.4034C14.7844 29.3722 14.6438 29.3352 14.5387 29.2926L14.8967 28.0909C15.1211 28.1563 15.3214 28.1875 15.4975 28.1847C15.6737 28.1818 15.8285 28.1264 15.962 28.0185C16.0984 27.9134 16.2134 27.7372 16.3072 27.4901L16.4393 27.1364L14.0657 20.4545H15.7021L17.2106 25.3977H17.2788L18.7915 20.4545H20.4322L17.8114 27.7926C17.6893 28.1392 17.5273 28.4361 17.3256 28.6832C17.1239 28.9332 16.8768 29.1236 16.5842 29.2543C16.2944 29.3878 15.9478 29.4545 15.5444 29.4545ZM23.0423 23.1648V27H21.4996V20.4545H22.9741V21.5668H23.0508C23.2013 21.2003 23.4414 20.9091 23.771 20.6932C24.1033 20.4773 24.5138 20.3693 25.0025 20.3693C25.4542 20.3693 25.8477 20.4659 26.1829 20.6591C26.521 20.8523 26.7823 21.1321 26.967 21.4986C27.1545 21.8651 27.2468 22.3097 27.244 22.8324V27H25.7013V23.071C25.7013 22.6335 25.5877 22.2912 25.3604 22.044C25.136 21.7969 24.8249 21.6733 24.4272 21.6733C24.1573 21.6733 23.9173 21.733 23.707 21.8523C23.4996 21.9687 23.3363 22.1378 23.217 22.3594C23.1005 22.581 23.0423 22.8494 23.0423 23.1648ZM31.6673 27.1278C31.0138 27.1278 30.4528 26.9844 29.984 26.6974C29.5181 26.4105 29.1587 26.0142 28.9059 25.5085C28.6559 25 28.5309 24.4148 28.5309 23.7528C28.5309 23.0881 28.6587 22.5014 28.9144 21.9929C29.1701 21.4815 29.5309 21.0838 29.9968 20.7997C30.4656 20.5128 31.0195 20.3693 31.6587 20.3693C32.19 20.3693 32.6602 20.4673 33.0692 20.6634C33.4812 20.8565 33.8093 21.1307 34.0536 21.4858C34.2979 21.8381 34.4371 22.25 34.4712 22.7216H32.9968C32.9371 22.4062 32.7951 22.1435 32.5707 21.9332C32.3491 21.7202 32.0522 21.6136 31.68 21.6136C31.3647 21.6136 31.0877 21.6989 30.8491 21.8693C30.6104 22.0369 30.4244 22.2784 30.2908 22.5938C30.1602 22.9091 30.0948 23.2869 30.0948 23.7273C30.0948 24.1733 30.1602 24.5568 30.2908 24.8778C30.4215 25.196 30.6048 25.4418 30.8406 25.6151C31.0792 25.7855 31.359 25.8707 31.68 25.8707C31.9073 25.8707 32.1104 25.8281 32.2894 25.7429C32.4712 25.6548 32.6232 25.5284 32.7454 25.3636C32.8675 25.1989 32.9513 24.9986 32.9968 24.7628H34.4712C34.4343 25.2259 34.2979 25.6364 34.0621 25.9943C33.8263 26.3494 33.5053 26.6278 33.0991 26.8295C32.6928 27.0284 32.2156 27.1278 31.6673 27.1278Z"
          fill="white"
        />
        <rect
          y="2"
          width="4"
          height="27"
          rx="2"
          fill="url(#paint0_linear_61_4)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_61_4"
            x1="2"
            y1="2"
            x2="2"
            y2="29"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#CF009E" />
            <stop offset="1" stop-color="#B95FFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;