import { useState, useEffect } from 'react';
import styled from 'styled-components'
import { Box } from './Box';
import { getInvoices } from 'fakeApi';
import { NavLink, Outlet } from 'react-router-dom';

const NavItem = styled(NavLink)`
padding: ${p => p.theme.space[3]}px;
text-decoration: none;
color: ${p => p.theme.colors.text};
border-radius: 8px;

&.active {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
}

:hover:not(.active) {
    color: ${p => p.theme.colors.primary};
}

`;

const Invoices = () => {
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        getInvoices().then(setInvoices);
    }, []);

    return (
        <div>
            <Box display="flex">
            <Box as="aside" display="flex" flexDirection="column"
                    borderRight="1px solid black"
                p={3}>
                {invoices.map(({id}) => <NavItem key={id} to={`${id}`}>{id}</NavItem>)}
                </Box>
                <Outlet/>
                </Box>
        </div>
    );
};

export default Invoices;