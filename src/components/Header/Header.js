'use client';
import React, { useContext } from 'react';
import {
  Header,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  SideNavLink,
  SwitcherDivider,
  Toggle,
  Theme,
} from '@carbon/react';

import {
  EnergyRenewable,
  Dashboard,
  IbmAiopsInsights,
  LoadBalancerVpc,
  Subflow,
  AlignHorizontalCenter,
  User,
  Information,
  Settings,
  Cicsplex,
  Alarm,
} from '@carbon/icons-react';
import { usePathname } from 'next/navigation';
import { ThemeContext } from '@/utils/ThemeContext';
import { useRouter } from 'next/navigation';

export const HeaderWSideNav = ({ isExpanded, toggleSideNavExpanded }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { theme, setTheme } = useContext(ThemeContext);
  const isCurrentPath = (path) => {
    return (process.env.PATH_PREFIX + path).trim() === pathname;
  };

  return (
    <Header aria-label="SUPCON EMS">
      <SkipToContent />
      <HeaderGlobalAction>
        <EnergyRenewable
          aria-label={isExpanded ? 'Close menu' : 'Open menu'}
          onClick={toggleSideNavExpanded}
          isActive={isExpanded}
          aria-expanded={isExpanded}
        />
      </HeaderGlobalAction>
      <HeaderName
        prefix="SUPCON"
        onClick={() => {
          router.push(`${process.env.PATH_PREFIX}/dashboard`);
        }}
        className="cursor-pointer"
      >
        EMS
      </HeaderName>
      <Theme theme={theme.sideNavTheme}>
        <SideNav
          aria-label="Side navigation"
          expanded={isExpanded}
          addFocusListeners={false}
          className="w-10"
          onOverlayClick={() => {}}
        >
          <SideNavItems isSideNavExpanded={isExpanded}>
            <SideNavLink
              renderIcon={Dashboard}
              isSideNavExpanded={isExpanded}
              onClick={() => {
                router.push(`${process.env.PATH_PREFIX}/dashboard`);
              }}
              className="cursor-pointer"
              isActive={isCurrentPath('/dashboard')}
            >
              Dashboard
            </SideNavLink>
            <SideNavLink
              isSideNavExpanded={isExpanded}
              renderIcon={IbmAiopsInsights}
              onClick={() => {
                router.push(`${process.env.PATH_PREFIX}/insights`);
              }}
              className="cursor-pointer"
              isActive={isCurrentPath('/insights')}
            >
              Insights
            </SideNavLink>
            <SideNavLink
              isSideNavExpanded={isExpanded}
              renderIcon={Subflow}
              onClick={() => {
                router.push(`${process.env.PATH_PREFIX}/consumption`);
              }}
              className="cursor-pointer"
              isActive={isCurrentPath('/consumption')}
            >
              Energy Consumption
            </SideNavLink>
            <SideNavLink
              isSideNavExpanded={isExpanded}
              renderIcon={AlignHorizontalCenter}
              onClick={() => {
                router.push(`${process.env.PATH_PREFIX}/efficiency`);
              }}
              className="cursor-pointer"
              isActive={isCurrentPath('/operation/outbound')}
            >
              Energy Efficiency
            </SideNavLink>

            <SideNavLink
              isSideNavExpanded={isExpanded}
              renderIcon={LoadBalancerVpc}
              onClick={() => {
                router.push(`${process.env.PATH_PREFIX}/balance`);
              }}
              className="cursor-pointer"
              isActive={isCurrentPath('/balance')}
            >
              Energy Balance
            </SideNavLink>
            <SideNavLink
              isSideNavExpanded={isExpanded}
              renderIcon={Alarm}
              onClick={() => {
                router.push(`${process.env.PATH_PREFIX}/alarm`);
              }}
              className="cursor-pointer"
              isActive={isCurrentPath('/alarm')}
            >
              Alarm
            </SideNavLink>
            <SideNavLink
              isSideNavExpanded={isExpanded}
              renderIcon={Cicsplex}
              onClick={() => {
                router.push(`${process.env.PATH_PREFIX}/simulation`);
              }}
              className="cursor-pointer"
              isActive={isCurrentPath('/simulation')}
            >
              Simulation
            </SideNavLink>
          </SideNavItems>
        </SideNav>
      </Theme>
      <HeaderGlobalBar className="flex items-center">
        {/* <Toggle
          labelA="Light"
          labelB="Dark"
          className="mr-[2rem]"
          size="sm"
          id="theme-toggle"
          toggled={theme.headerTheme === "g100"}
          onToggle={(e) => {
            console.log(e);
            if (e) {
              setTheme({
                headerTheme: "g100",
                contentTheme: "g10",
                sideNavTheme: "g90",   
              });
            } else {
              setTheme({
                headerTheme: "white",
                contentTheme: "white",
                sideNavTheme: "white",
              });
            }
          }}
        /> */}
        <HeaderGlobalAction aria-label="Settings">
          <Settings size={20} />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="User">
          <User size={20} />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="Info" tooltipAlignment="end">
          <Information size={20} />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  );
};
