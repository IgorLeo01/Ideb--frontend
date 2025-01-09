import { Assignment, Login, Logout, MonitorHeart, Settings } from "@mui/icons-material";
import { Avatar, Divider, ListItemIcon, Menu, MenuItem, MenuList } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, selectCurrentToken, selectCurrentAuthState } from "../../services/auth/authSlice";
import { AppDispatch } from "../../app/store";

type props = {
  handleClose: (event: React.MouseEvent<HTMLElement>) => void;
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  anchorEl: any;
  open: boolean;
};

export default function ProfileMenu(props: props) {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());    
    navigate("/")
  };

  const goToDashboard = () => {
    navigate("/dashboard");
  };
  const goToProfile = () => {
    navigate("/dadospessoais");
  };
  const goToLogin = () => {
    navigate("/login");
  };

  const token = useSelector(selectCurrentToken);

  const user = useSelector(selectCurrentAuthState);

  return (
    <Menu
      anchorEl={props.anchorEl}
      id="account-menu"
      open={props.open}
      onClose={props.handleClose}
      onClick={props.handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "&::before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{
        horizontal: "right",
        vertical: "top",
      }}
      anchorOrigin={{
        horizontal: "right",
        vertical: "bottom",
      }}
    >
      {token ? (
        <MenuList>
          <MenuItem onClick={goToProfile}>
            <Avatar /> Meu Perfil
          </MenuItem>

          {user && user.roles.includes("ROLE_EMPRESA") ? (
            <>
              <MenuItem onClick={goToDashboard}>
                <ListItemIcon>
                  <MonitorHeart />
                </ListItemIcon>
                Bem-estar Corporativo
              </MenuItem>
            </>
          ) : null}
          {(user && user.roles.includes("ROLE_CLIENTE")) ||
          (user && user.roles.includes("ROLE_ESPECIALISTA")) ? (
            <>
              <MenuItem onClick={goToDashboard}>
                <ListItemIcon>
                  <MonitorHeart />
                </ListItemIcon>
                Meus testes
              </MenuItem>
            </>
          ) : null}
          {user && user.roles.includes("ROLE_ESPECIALISTA") ? (
            <MenuItem onClick={goToDashboard}>
              <ListItemIcon>
                <Assignment />
              </ListItemIcon>
              Meus Atendimentos
            </MenuItem>
          ) : null}
          <Divider />
          <MenuItem onClick={props.handleClose}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Configurações
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Sair
          </MenuItem>
        </MenuList>
      ) : (
        <>
          <MenuItem onClick={goToLogin}>
            <ListItemIcon>
              <Login fontSize="small" />
            </ListItemIcon>
            Acessar minha conta
          </MenuItem>
        </>
      )}
    </Menu>
  );
}
