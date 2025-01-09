import { PersonAdd } from "@mui/icons-material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import { Avatar, IconButton, Tooltip } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../app/store";
import ar from "../../assets/LogoIdebATT.png";
import company from "../../assets/empresa.png";
import specialist from "../../assets/especialista.png";
import client from "../../assets/perfil.png";
import {
  loadAuthStateFromLocalStorage,
  selectCurrentUserId
} from "../../services/auth/authSlice";
import { selectRegisterSelectionModalState, setRegisterSelectionModalState } from "../../services/ui/UiSlice";
import { useNavbar } from "../Contexts/navbarContext";
import ProfileMenu from "../ProfileMenu";
import {
  ButtonsNavBar,
  Container,
  ContainerMobile,
  ContainerWeb,
  CustomReactModal,
  ModalContent,
  ModalOption,
  StyledLink,
} from "./style";

const Navbar: React.FC<any> = ({ onOpenCreateAccountModal }) => {
  const navigate = useNavigate();
  const { state, dispatch } = useNavbar();
  const { value, isMobileView, isMobileMenuOpen } = state;
  const dispatchRedux = useDispatch<AppDispatch>();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };    

  const isAuthenticated = useSelector(selectCurrentUserId);
  
  const [localMobileView, setLocalMobileView] = useState(
    window.innerWidth <= 667
  );

  const registerSelectionModalState: boolean = useSelector(
    selectRegisterSelectionModalState
  );

  const openCreateAccountModal = () => {
    dispatchRedux(setRegisterSelectionModalState(true));
  };

  const closeCreateAccountModal = () => {
    dispatchRedux(setRegisterSelectionModalState(false));
  };

  const handleRedirectHome = () => {
    console.log("Go to home");
    navigate("/");
  };

  const handleRedirectLogin = () => {
    navigate("/login");
  };

  const handleRedirectAgendarConsulta = () => {
    navigate("/consultas");
  };  

  useEffect(() => {
    console.log("isMobileView:", isMobileView);
    console.log("isMobileMenuOpen:", isMobileMenuOpen);
    if(!isAuthenticated){
      console.log("User not authenticated, trying to load info from local storage")
      dispatchRedux(loadAuthStateFromLocalStorage());
    }
  }, [isMobileView, isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      setLocalMobileView(window.innerWidth <= 667);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Container>
        <header className={`App-header`}>
          {localMobileView ? (
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {isAuthenticated ? (
                <>
                  <ContainerMobile>
                    <div className="Img-logo" onClick={handleRedirectHome}>
                      <div className="rounded">
                        <img src={ar} className="App-logo-mobile" alt="logo" />
                      </div>
                    </div>
                    <div className="corpo">
                      <Tooltip title="Menu">
                        <IconButton
                          onClick={handleClick}
                          size="small"
                          sx={{ ml: 2, padding: "0px" }}
                          aria-controls={open ? "account-menu" : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? "true" : undefined}
                        >
                          <Avatar
                            sx={{
                              color: "white",
                              fontSize: 15,
                              marginRight: "10px",
                            }}
                          >
                            M
                          </Avatar>
                        </IconButton>
                      </Tooltip>
                      <ProfileMenu
                        handleClose={handleClose}
                        anchorEl={anchorEl}
                        open={open}
                        handleClick={handleClick}
                      />
                    </div>
                  </ContainerMobile>
                </>
              ) : (
                <>
                  <ContainerMobile>
                    <div className="Img-logo" onClick={handleRedirectHome}>
                      <div className="rounded">
                        <img src={ar} className="App-logo-mobile" alt="logo" />
                      </div>
                    </div>
                    <div className="corpo">
                      <Tooltip title="Menu">
                        <IconButton
                          onClick={handleClick}
                          size="small"
                          sx={{ ml: 2, padding: "0px" }}
                          aria-controls={open ? "account-menu" : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? "true" : undefined}
                        >
                          <MenuIcon
                            sx={{
                              color: "white",
                              fontSize: 35,
                              marginRight: "10px",
                            }}
                          />
                        </IconButton>
                      </Tooltip>
                      <ProfileMenu
                        handleClose={handleClose}
                        anchorEl={anchorEl}
                        open={open}
                        handleClick={handleClick}
                      />
                    </div>
                  </ContainerMobile>
                </>
              )}
            </Box>
          ) : (
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {isAuthenticated ? (
                <>
                  <ContainerWeb>
                    <div className="Img-logo" onClick={handleRedirectHome}>
                      <div className="rounded">
                        <img src={ar} className="App-logo-mobile" alt="logo" />
                      </div>
                    </div>
                    <div className="corpo">
                      <ButtonsNavBar>
                        <button
                          className="Button-C"
                          onClick={handleRedirectAgendarConsulta}
                        >
                          <div className="Icon-C">
                            <CalendarMonthIcon sx={{ color: "#1c5985" }} />
                          </div>
                          <p className="text-C">Agende sua consulta</p>
                        </button>
                      </ButtonsNavBar>
                      <Tooltip title="Menu">
                        <IconButton
                          onClick={handleClick}
                          size="small"
                          sx={{ ml: 2 }}
                          aria-controls={open ? "account-menu" : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? "true" : undefined}
                        >
                          <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                        </IconButton>
                      </Tooltip>
                      <ProfileMenu
                        handleClose={handleClose}
                        anchorEl={anchorEl}
                        open={open}
                        handleClick={handleClick}
                      />
                    </div>
                  </ContainerWeb>
                </>
              ) : (
                <>
                  <ContainerWeb>
                    <div className="Img-logo" onClick={handleRedirectHome}>
                      <div className="rounded">
                        <img src={ar} className="App-logo-mobile" alt="logo" />
                      </div>
                    </div>
                    <div className="corpo">
                      <ButtonsNavBar>
                        <button
                          className="Button-C"
                          onClick={handleRedirectAgendarConsulta}
                        >
                          <div className="Icon-C">
                            <CalendarMonthIcon sx={{ color: "#1c5985" }} />
                          </div>
                          <p className="text-C">Agende sua consulta</p>
                        </button>
                        <button
                          className="Button-C"
                          onClick={openCreateAccountModal}
                        >
                          <div className="Icon-C">
                            <PersonAdd sx={{ color: "#1c5985" }} />
                          </div>
                          <p className="text-C">Criar Conta</p>
                        </button>
                        <button
                          className="Button-C"
                          onClick={handleRedirectLogin}
                        >
                          <div className="Icon-C">
                            <PersonIcon sx={{ color: "#1c5985" }} />
                          </div>
                          <p className="text-C">Fazer Login</p>
                        </button>
                        <CustomReactModal
                          isOpen={registerSelectionModalState}
                          onRequestClose={closeCreateAccountModal}
                          contentLabel="Opções de Cadastro"
                          ariaHideApp={false}
                        >
                          <ModalContent>
                            <ModalOption>
                              <StyledLink
                                to="/cadastro-cliente"
                                onClick={closeCreateAccountModal}
                              >
                                <img src={client} alt="Client" />
                                Cliente
                              </StyledLink>
                            </ModalOption>
                            <ModalOption>
                              <StyledLink
                                to="/cadastro-especialista"
                                onClick={closeCreateAccountModal}
                              >
                                <img src={specialist} alt="Specialist" />
                                Especialista
                              </StyledLink>
                            </ModalOption>
                            <ModalOption>
                              <StyledLink
                                to="/cadastro-empresa"
                                onClick={closeCreateAccountModal}
                              >
                                <img src={company} alt="Company" />
                                Empresa
                              </StyledLink>
                            </ModalOption>
                          </ModalContent>
                        </CustomReactModal>
                      </ButtonsNavBar>
                    </div>
                  </ContainerWeb>
                </>
              )}
            </Box>
          )}
        </header>
      </Container>
    </>
  );
};

export default Navbar;
