import styled from "styled-components";

export const HeaderComponent = styled.div`
  height: 70px;
  .container {
    height: 100%;
    .header-content {
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      .brand-name {
        color: #444;
      }
      .nav-bar {
        ul {
          display: flex;
          li {
            padding: 0 10px;
            a {
              color: #444;
              font-size: 15px;
              text-transform: uppercase;
              transition: color 0.4s ease;
              &:hover {
                color: #ff6663;
              }
            }
          }
        }
      }
      .register-buttons {
        .btn {
          font-size: 15px;
          border: none;
          border-radius: 3px;
          outline: none;
          cursor: pointer;
          transition: all 0.4s ease;
        }
        .login-btn {
          padding: 7px 13px;
          color: #146580;
          background-color: #fff;
          border: 1px solid #146580;
          &:hover {
            color: #fff;
            background-color: #146580;
          }
        }
        .sign-in-btn {
          margin-left: 15px;
          padding: 7px 10px;
          color: #fff;
          background-color: #146580;
          border: 1px solid #146580;
          &:hover {
            color: #fff;
            background-color: #092d3a;
          }
        }
      }
      .mobile-menu {
        display: none;
        color: #146580;
        font-size: 25px;
        cursor: pointer;
        &:hover {
          color: #092a35;
        }
      }
    }
  }

  @media screen and (max-width: 900px) {
    position: relative;
    .container {
      .header-content {
        .nav-bar {
          width: 50%;
          height: 89vh;
          position: absolute;
          top: 100%;
          right: -55%;
          background-color: #146580;
          transition: 600ms ease all;
          &.active {
            right: 0%;
          }
          ul {
            margin-top: 20px;
            flex-direction: column;
            li {
              padding: 0;
              text-align: center;
              a {
                padding: 10px 0;
                display: block;
                color: #fff;
                transition: 600ms ease all;
                &:hover {
                  background-color: #0d4253;
                }
              }
            }
          }
        }

        .mobile-menu {
          display: block;
          color: ${({ open }) => (open ? "red" : "#146580")};
        }
      }
    }
  }
`;
