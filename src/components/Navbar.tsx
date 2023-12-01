import React, { useState } from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Container,
	Box,
	Menu,
	MenuItem,
	Button,
	Tooltip,
	Icon,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
	Adb as AdbIcon,
	Menu as MenuIcon,
	AccountCircle as AccountCircleIcon,
} from "@mui/icons-material";
import { NavbarProps } from "../interfaces";

const Navbar: React.FC<NavbarProps> = (params) => {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null
	);
	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<IconButton href="/" sx={{ display: { xs: "none", md: "flex" } }}>
						<AdbIcon sx={{ mr: 1 }} />
						<Typography
							variant="h5"
							noWrap
							sx={{
								mr: 2,
								flexGrow: 1,
								fontFamily: "monospace",
								fontWeight: 700,
								letterSpacing: ".3rem",
								color: "inherit",
								textDecoration: "none",
							}}>
							LOGO
						</Typography>
					</IconButton>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit">
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}>
							{params.pages.map((page) => (
								<MenuItem
									key={page}
									component={Link}
									to={`/bonjour`}
									onClick={handleCloseNavMenu}>
									<Typography textAlign="center">{page}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<IconButton
						sx={{
							placeSelf: "center",
							display: { xs: "flex", md: "none" },
							mr: 1,
						}}>
						<AdbIcon />
						<Typography
							variant="h5"
							noWrap
							sx={{
								mr: 2,
								display: { xs: "flex", md: "none" },
								flexGrow: 1,
								fontFamily: "monospace",
								fontWeight: 700,
								letterSpacing: ".3rem",
								color: "inherit",
								textDecoration: "none",
							}}>
							LOGO
						</Typography>
					</IconButton>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						{params.pages.map((page) => (
							<Button
								key={page}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: "white", display: "block" }}>
								{page}
							</Button>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Icon component={AccountCircleIcon} />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: "45px" }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}>
							<MenuItem></MenuItem>
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Navbar;
