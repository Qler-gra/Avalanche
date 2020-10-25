import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Logo = (props: any) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 40 26"
      fill="none"
      color={props.color ? props.color : null}
    >
      <Path
        d="M39.3521 24.1011H39.0428L27.2759 2.32418C27.2093 2.20107 27.1048 2.10276 26.9777 2.04409L23.989 0.66215C23.6784 0.518479 23.3097 0.641157 23.1471 0.94215L19.3127 8.03597L18.1952 6.35977C18.0924 6.20556 17.9285 6.10275 17.745 6.07735C17.5612 6.05187 17.3757 6.1063 17.2349 6.22681L14.9533 8.17852L12.8669 7.95381C12.6265 7.92815 12.3922 8.03779 12.2583 8.23874L1.68821 24.1011H0.647948C0.290108 24.1011 0 24.3912 0 24.7491C0 25.1069 0.290108 25.397 0.647948 25.397H9.63274C9.74549 25.397 9.85633 25.3675 9.95421 25.3117L14.4708 22.7307L18.9873 25.3117C19.087 25.3686 19.1979 25.397 19.3088 25.397C19.4242 25.397 19.5396 25.3662 19.6422 25.3047L22.7645 23.4312L25.887 25.3047C25.9877 25.3651 26.1029 25.397 26.2203 25.397H39.3521C39.7099 25.397 40 25.1069 40 24.7491C40 24.3912 39.7099 24.1011 39.3521 24.1011ZM23.9978 2.09386L26.2383 3.1298L29.1083 8.44124L26.4252 7.5469C26.1925 7.46941 25.9356 7.52988 25.7622 7.70345L24.0988 9.36677L21.2838 7.11476L23.9978 2.09386ZM20.1777 9.1609L20.6575 8.27329L23.7421 10.741C23.861 10.8361 24.0041 10.8831 24.1467 10.8831C24.3133 10.8831 24.4792 10.819 24.605 10.6933L26.3953 8.90301L30.0085 10.1074L37.5698 24.1011H30.0228L20.1205 9.24772C20.1413 9.22059 20.161 9.192 20.1777 9.1609ZM13.1189 9.28444L15.0926 9.49697C15.2705 9.51623 15.4475 9.46111 15.5832 9.34509L17.5222 7.68643L20.5889 12.2864L19.2387 14.0866L17.0024 11.8504C16.8737 11.7217 16.6967 11.6524 16.5149 11.6613C16.333 11.6695 16.163 11.7539 16.0465 11.8938L12.9974 15.5527L10.3521 13.4365L13.1189 9.28444ZM23.0979 22.12C22.8926 21.9969 22.6363 21.9969 22.4311 22.12L19.3008 23.9982L14.7922 21.4219C14.593 21.3081 14.3484 21.3081 14.1493 21.4219L9.46065 24.1011H3.24553L9.63084 14.5188L12.6839 16.9612C12.8033 17.0567 12.9462 17.1033 13.0883 17.1033C13.2741 17.1033 13.4585 17.0237 13.5864 16.8701L16.5879 13.2684L18.8508 15.5312C18.9837 15.6641 19.1675 15.733 19.3549 15.7193C19.5422 15.706 19.7146 15.612 19.8273 15.4618L21.3513 13.4298L28.4653 24.1011H26.3997L23.0979 22.12Z"
        fill={props.white ? "#E7EBEF" : "#F28300"}
      />
    </Svg>
  );
};

export default Logo;