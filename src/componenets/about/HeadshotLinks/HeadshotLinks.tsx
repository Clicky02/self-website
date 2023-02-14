import React from "react";
import headshotImage from "assets/headshot2.jpg";
import githubLogo from "assets/logos/github.png";
import linkedinLogo from "assets/logos/linkedin.png";
import "./HeadshotLinks.css";

class HeadshotLinks extends React.Component {
  render() {
    return (
      <svg
        width="420"
        height="340"
        viewBox="0 0 420 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g clipPath="url(#clip0_15_7)">
          <g filter="url(#filter0_d_15_7)">
            <mask
              id="mask0_15_7"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="109"
              y="5"
              width="298"
              height="296"
            >
              <path
                d="M246.757 8.66082C253.829 5.09989 262.171 5.09989 269.243 8.66082L393.199 71.0733C401.634 75.3204 406.956 83.9584 406.956 93.4025V212.597C406.956 222.042 401.634 230.68 393.199 234.927L269.243 297.339C262.171 300.9 253.829 300.9 246.757 297.339L122.801 234.927C114.366 230.68 109.044 222.042 109.044 212.597V93.4025C109.044 83.9584 114.366 75.3204 122.801 71.0732L246.757 8.66082Z"
                fill="black"
              />
            </mask>
            <g mask="url(#mask0_15_7)">
              <rect
                x="113"
                y="3"
                width="294"
                height="300"
                fill="url(#headshotPattern)"
              />
            </g>
          </g>

          {/*Github Block*/}

          <a href="https://github.com/Clicky02/">
            <g filter="url(#filter1_d_15_7)" className="HexagonLink">
              <path
                d="M53.5529 155.264C56.3818 153.84 59.7182 153.84 62.5471 155.264L102.82 175.542C106.194 177.241 108.323 180.696 108.323 184.474V222.776C108.323 226.554 106.194 230.009 102.82 231.708L62.5471 251.986C59.7182 253.41 56.3818 253.41 53.5528 251.986L13.2801 231.708C9.90599 230.009 7.77723 226.554 7.77723 222.776V184.474C7.77723 180.696 9.90599 177.241 13.2801 175.542L53.5529 155.264Z"
                fill="black"
                className="HexagonLinkBackground"
              />
              <mask
                id="mask1_15_7"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="7"
                y="154"
                width="102"
                height="100"
              >
                <path
                  d="M53.5529 155.264C56.3818 153.84 59.7182 153.84 62.5471 155.264L102.82 175.542C106.194 177.241 108.323 180.696 108.323 184.474V222.776C108.323 226.554 106.194 230.009 102.82 231.708L62.5471 251.986C59.7182 253.41 56.3818 253.41 53.5528 251.986L13.2801 231.708C9.90599 230.009 7.77723 226.554 7.77723 222.776V184.474C7.77723 180.696 9.90599 177.241 13.2801 175.542L53.5529 155.264Z"
                  fill="black"
                />
              </mask>
              <g mask="url(#mask1_15_7)">
                <rect
                  x="20.25"
                  y="165.75"
                  width="75"
                  height="75"
                  fill="url(#githubPattern)"
                  className="HexagonLinkImage"
                />
              </g>
            </g>
          </a>

          {/*LinkedIn Block*/}

          <a href="https://www.linkedin.com/in/gareth-fultz/">
            <g filter="url(#filter2_d_15_7)" className="HexagonLink">
              <path
                d="M105.553 235.264C108.382 233.84 111.718 233.84 114.547 235.264L154.82 255.542C158.194 257.241 160.323 260.696 160.323 264.474V302.776C160.323 306.554 158.194 310.009 154.82 311.708L114.547 331.986C111.718 333.41 108.382 333.41 105.553 331.986L65.2801 311.708C61.906 310.009 59.7772 306.554 59.7772 302.776V264.474C59.7772 260.696 61.906 257.241 65.2801 255.542L105.553 235.264Z"
                fill="#0274B3"
                className="HexagonLinkBackground"
              />
              <mask
                id="mask2_15_7"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="59"
                y="234"
                width="102"
                height="100"
              >
                <path
                  d="M105.553 235.264C108.382 233.84 111.718 233.84 114.547 235.264L154.82 255.542C158.194 257.241 160.323 260.696 160.323 264.474V302.776C160.323 306.554 158.194 310.009 154.82 311.708L114.547 331.986C111.718 333.41 108.382 333.41 105.553 331.986L65.2801 311.708C61.906 310.009 59.7772 306.554 59.7772 302.776V264.474C59.7772 260.696 61.906 257.241 65.2801 255.542L105.553 235.264Z"
                  fill="black"
                />
              </mask>
              <g mask="url(#mask2_15_7)">
                <rect
                  x="68.5"
                  y="242.75"
                  width="82.5"
                  height="82.5"
                  fill="url(#linkedinPattern)"
                  className="HexagonLinkImage"
                />
              </g>
            </g>
          </a>
        </g>
        <defs>
          <filter
            id="filter0_d_15_7"
            x="101"
            y="-6.00989"
            width="317.956"
            height="318.02"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="6" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_15_7"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_15_7"
              result="shape"
            />
          </filter>
          <pattern
            id="headshotPattern"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#headshotImage"
              transform="translate(0 -0.0805422) scale(0.000573723 0.000562249)"
            />
          </pattern>
          <filter
            id="filter1_d_15_7"
            x="-4.22278"
            y="142.196"
            width="124.546"
            height="122.858"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="6" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_15_7"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_15_7"
              result="shape"
            />
          </filter>
          <pattern
            id="githubPattern"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#githubImage" transform="scale(0.00833333)" />
          </pattern>
          <filter
            id="filter2_d_15_7"
            x="47.7772"
            y="222.196"
            width="124.546"
            height="122.858"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="6" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_15_7"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_15_7"
              result="shape"
            />
          </filter>
          <pattern
            id="linkedinPattern"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#linkedinImage" transform="scale(0.00125)" />
          </pattern>
          <clipPath id="clip0_15_7">
            <rect width="420" height="340" fill="white" />
          </clipPath>
          <image
            id="headshotImage"
            width="1743"
            height="2320"
            xlinkHref={headshotImage}
          />
          <image
            id="githubImage"
            width="120"
            height="120"
            xlinkHref={githubLogo}
          />
          <image
            id="linkedinImage"
            width="800"
            height="800"
            xlinkHref={linkedinLogo}
          />
        </defs>
      </svg>
    );
  }
}

export default HeadshotLinks;
