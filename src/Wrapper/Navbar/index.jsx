import { Box, Typography } from '@mui/material'
import React from 'react'
import navItems from '../nav-items/navItems'

const Navbar = () => {
    return (
        <React.Fragment>
            <Box sx={{
                display: 'flex',
                backgroundColor: '#1a1a1a',
                padding: '20px 20px',
                alignItems: 'center',
                justifyContent: 'space-around',
            }}>
                {/* Left side - Logo and Nav Items */}
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 3,
                }}>
                    {/* Logo/Icon */}
                    <Box sx={{
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        backgroundColor: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Typography sx={{ color: '#1a1a1a', fontWeight: 'bold', fontSize: 14 }}>SF</Typography>
                    </Box>
                </Box>
                {/* Right side - Email Button */}
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: 4,
                }}>

                    {/* Nav Items */}
                    {navItems.map((item) => (
                        <Typography
                            key={item._id}
                            component="a"
                            href={item.link}
                            sx={{
                                color: '#fff',
                                textDecoration: 'none',
                                fontSize: 14,
                                '&:hover': { opacity: 0.8 }
                            }}
                        >
                            {item.name}
                        </Typography>
                    ))}
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default Navbar