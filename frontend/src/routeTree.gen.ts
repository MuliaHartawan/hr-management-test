/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './app/routes/__root'
import { Route as NotFoundImport } from './app/routes/not-found'
import { Route as DeniedImport } from './app/routes/denied'
import { Route as authenticatedRouteImport } from './app/routes/(authenticated)/route'
import { Route as authenticatedDashboardRouteImport } from './app/routes/(authenticated)/dashboard/route'
import { Route as authenticatedUsersIndexImport } from './app/routes/(authenticated)/users/index'
import { Route as authenticatedShiftsIndexImport } from './app/routes/(authenticated)/shifts/index'
import { Route as authenticatedPositionsIndexImport } from './app/routes/(authenticated)/positions/index'
import { Route as authenticatedDepartmentsIndexImport } from './app/routes/(authenticated)/departments/index'
import { Route as authenticatedAttendancesIndexImport } from './app/routes/(authenticated)/attendances/index'
import { Route as publicAuthLoginIndexImport } from './app/routes/(public)/auth/login/index'
import { Route as authenticatedUsersCreateIndexImport } from './app/routes/(authenticated)/users/create/index'
import { Route as authenticatedUsersUserIdIndexImport } from './app/routes/(authenticated)/users/$userId/index'
import { Route as authenticatedShiftsCreateIndexImport } from './app/routes/(authenticated)/shifts/create/index'
import { Route as authenticatedShiftsShiftIdIndexImport } from './app/routes/(authenticated)/shifts/$shiftId/index'
import { Route as authenticatedPositionsCreateIndexImport } from './app/routes/(authenticated)/positions/create/index'
import { Route as authenticatedPositionsPositionIdIndexImport } from './app/routes/(authenticated)/positions/$positionId/index'
import { Route as authenticatedDepartmentsCreateIndexImport } from './app/routes/(authenticated)/departments/create/index'
import { Route as authenticatedDepartmentsDepartmentIdIndexImport } from './app/routes/(authenticated)/departments/$departmentId/index'
import { Route as authenticatedDashboardStaffIndexImport } from './app/routes/(authenticated)/dashboard/staff/index'
import { Route as authenticatedDashboardHrdIndexImport } from './app/routes/(authenticated)/dashboard/hrd/index'
import { Route as authenticatedAttendancesReportsIndexImport } from './app/routes/(authenticated)/attendances/reports/index'
import { Route as authenticatedAttendancesHistoryIndexImport } from './app/routes/(authenticated)/attendances/history/index'
import { Route as authenticatedAttendancesAttendanceIdIndexImport } from './app/routes/(authenticated)/attendances/$attendanceId/index'
import { Route as authenticatedUsersUserIdUpdateIndexImport } from './app/routes/(authenticated)/users/$userId/update/index'
import { Route as authenticatedShiftsShiftIdUpdateIndexImport } from './app/routes/(authenticated)/shifts/$shiftId/update/index'
import { Route as authenticatedPositionsPositionIdUpdateIndexImport } from './app/routes/(authenticated)/positions/$positionId/update/index'
import { Route as authenticatedDepartmentsDepartmentIdUpdateIndexImport } from './app/routes/(authenticated)/departments/$departmentId/update/index'
import { Route as authenticatedAttendancesPresenceClockoutIndexImport } from './app/routes/(authenticated)/attendances/presence/clock_out/index'
import { Route as authenticatedAttendancesPresenceClockinIndexImport } from './app/routes/(authenticated)/attendances/presence/clock_in/index'

// Create Virtual Routes

const Import = createFileRoute('/')()

// Create/Update Routes

const NotFoundRoute = NotFoundImport.update({
  id: '/not-found',
  path: '/not-found',
  getParentRoute: () => rootRoute,
} as any)

const DeniedRoute = DeniedImport.update({
  id: '/denied',
  path: '/denied',
  getParentRoute: () => rootRoute,
} as any)

const authenticatedRouteRoute = authenticatedRouteImport.update({
  id: '/(authenticated)',
  getParentRoute: () => Route,
} as any)

const Route = Import.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const authenticatedDashboardRouteRoute =
  authenticatedDashboardRouteImport.update({
    id: '/dashboard',
    path: '/dashboard',
    getParentRoute: () => authenticatedRouteRoute,
  } as any)

const authenticatedUsersIndexRoute = authenticatedUsersIndexImport.update({
  id: '/users/',
  path: '/users/',
  getParentRoute: () => authenticatedRouteRoute,
} as any)

const authenticatedShiftsIndexRoute = authenticatedShiftsIndexImport.update({
  id: '/shifts/',
  path: '/shifts/',
  getParentRoute: () => authenticatedRouteRoute,
} as any)

const authenticatedPositionsIndexRoute =
  authenticatedPositionsIndexImport.update({
    id: '/positions/',
    path: '/positions/',
    getParentRoute: () => authenticatedRouteRoute,
  } as any)

const authenticatedDepartmentsIndexRoute =
  authenticatedDepartmentsIndexImport.update({
    id: '/departments/',
    path: '/departments/',
    getParentRoute: () => authenticatedRouteRoute,
  } as any)

const authenticatedAttendancesIndexRoute =
  authenticatedAttendancesIndexImport.update({
    id: '/attendances/',
    path: '/attendances/',
    getParentRoute: () => authenticatedRouteRoute,
  } as any)

const publicAuthLoginIndexRoute = publicAuthLoginIndexImport.update({
  id: '/(public)/auth/login/',
  path: '/auth/login/',
  getParentRoute: () => rootRoute,
} as any)

const authenticatedUsersCreateIndexRoute =
  authenticatedUsersCreateIndexImport.update({
    id: '/users/create/',
    path: '/users/create/',
    getParentRoute: () => authenticatedRouteRoute,
  } as any)

const authenticatedUsersUserIdIndexRoute =
  authenticatedUsersUserIdIndexImport.update({
    id: '/users/$userId/',
    path: '/users/$userId/',
    getParentRoute: () => authenticatedRouteRoute,
  } as any)

const authenticatedShiftsCreateIndexRoute =
  authenticatedShiftsCreateIndexImport.update({
    id: '/shifts/create/',
    path: '/shifts/create/',
    getParentRoute: () => authenticatedRouteRoute,
  } as any)

const authenticatedShiftsShiftIdIndexRoute =
  authenticatedShiftsShiftIdIndexImport.update({
    id: '/shifts/$shiftId/',
    path: '/shifts/$shiftId/',
    getParentRoute: () => authenticatedRouteRoute,
  } as any)

const authenticatedPositionsCreateIndexRoute =
  authenticatedPositionsCreateIndexImport.update({
    id: '/positions/create/',
    path: '/positions/create/',
    getParentRoute: () => authenticatedRouteRoute,
  } as any)

const authenticatedPositionsPositionIdIndexRoute =
  authenticatedPositionsPositionIdIndexImport.update({
    id: '/positions/$positionId/',
    path: '/positions/$positionId/',
    getParentRoute: () => authenticatedRouteRoute,
  } as any)

const authenticatedDepartmentsCreateIndexRoute =
  authenticatedDepartmentsCreateIndexImport.update({
    id: '/departments/create/',
    path: '/departments/create/',
    getParentRoute: () => authenticatedRouteRoute,
  } as any)

const authenticatedDepartmentsDepartmentIdIndexRoute =
  authenticatedDepartmentsDepartmentIdIndexImport.update({
    id: '/departments/$departmentId/',
    path: '/departments/$departmentId/',
    getParentRoute: () => authenticatedRouteRoute,
  } as any)

const authenticatedDashboardStaffIndexRoute =
  authenticatedDashboardStaffIndexImport.update({
    id: '/staff/',
    path: '/staff/',
    getParentRoute: () => authenticatedDashboardRouteRoute,
  } as any)

const authenticatedDashboardHrdIndexRoute =
  authenticatedDashboardHrdIndexImport.update({
    id: '/hrd/',
    path: '/hrd/',
    getParentRoute: () => authenticatedDashboardRouteRoute,
  } as any)

const authenticatedAttendancesReportsIndexRoute =
  authenticatedAttendancesReportsIndexImport.update({
    id: '/attendances/reports/',
    path: '/attendances/reports/',
    getParentRoute: () => authenticatedRouteRoute,
  } as any)

const authenticatedAttendancesHistoryIndexRoute =
  authenticatedAttendancesHistoryIndexImport.update({
    id: '/attendances/history/',
    path: '/attendances/history/',
    getParentRoute: () => authenticatedRouteRoute,
  } as any)

const authenticatedAttendancesAttendanceIdIndexRoute =
  authenticatedAttendancesAttendanceIdIndexImport.update({
    id: '/attendances/$attendanceId/',
    path: '/attendances/$attendanceId/',
    getParentRoute: () => authenticatedRouteRoute,
  } as any)

const authenticatedUsersUserIdUpdateIndexRoute =
  authenticatedUsersUserIdUpdateIndexImport.update({
    id: '/users/$userId/update/',
    path: '/users/$userId/update/',
    getParentRoute: () => authenticatedRouteRoute,
  } as any)

const authenticatedShiftsShiftIdUpdateIndexRoute =
  authenticatedShiftsShiftIdUpdateIndexImport.update({
    id: '/shifts/$shiftId/update/',
    path: '/shifts/$shiftId/update/',
    getParentRoute: () => authenticatedRouteRoute,
  } as any)

const authenticatedPositionsPositionIdUpdateIndexRoute =
  authenticatedPositionsPositionIdUpdateIndexImport.update({
    id: '/positions/$positionId/update/',
    path: '/positions/$positionId/update/',
    getParentRoute: () => authenticatedRouteRoute,
  } as any)

const authenticatedDepartmentsDepartmentIdUpdateIndexRoute =
  authenticatedDepartmentsDepartmentIdUpdateIndexImport.update({
    id: '/departments/$departmentId/update/',
    path: '/departments/$departmentId/update/',
    getParentRoute: () => authenticatedRouteRoute,
  } as any)

const authenticatedAttendancesPresenceClockoutIndexRoute =
  authenticatedAttendancesPresenceClockoutIndexImport.update({
    id: '/attendances/presence/clock_out/',
    path: '/attendances/presence/clock_out/',
    getParentRoute: () => authenticatedRouteRoute,
  } as any)

const authenticatedAttendancesPresenceClockinIndexRoute =
  authenticatedAttendancesPresenceClockinIndexImport.update({
    id: '/attendances/presence/clock_in/',
    path: '/attendances/presence/clock_in/',
    getParentRoute: () => authenticatedRouteRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof Import
      parentRoute: typeof rootRoute
    }
    '/(authenticated)': {
      id: '/(authenticated)'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof authenticatedRouteImport
      parentRoute: typeof Route
    }
    '/denied': {
      id: '/denied'
      path: '/denied'
      fullPath: '/denied'
      preLoaderRoute: typeof DeniedImport
      parentRoute: typeof rootRoute
    }
    '/not-found': {
      id: '/not-found'
      path: '/not-found'
      fullPath: '/not-found'
      preLoaderRoute: typeof NotFoundImport
      parentRoute: typeof rootRoute
    }
    '/(authenticated)/dashboard': {
      id: '/(authenticated)/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof authenticatedDashboardRouteImport
      parentRoute: typeof authenticatedRouteImport
    }
    '/(authenticated)/attendances/': {
      id: '/(authenticated)/attendances/'
      path: '/attendances'
      fullPath: '/attendances'
      preLoaderRoute: typeof authenticatedAttendancesIndexImport
      parentRoute: typeof authenticatedRouteImport
    }
    '/(authenticated)/departments/': {
      id: '/(authenticated)/departments/'
      path: '/departments'
      fullPath: '/departments'
      preLoaderRoute: typeof authenticatedDepartmentsIndexImport
      parentRoute: typeof authenticatedRouteImport
    }
    '/(authenticated)/positions/': {
      id: '/(authenticated)/positions/'
      path: '/positions'
      fullPath: '/positions'
      preLoaderRoute: typeof authenticatedPositionsIndexImport
      parentRoute: typeof authenticatedRouteImport
    }
    '/(authenticated)/shifts/': {
      id: '/(authenticated)/shifts/'
      path: '/shifts'
      fullPath: '/shifts'
      preLoaderRoute: typeof authenticatedShiftsIndexImport
      parentRoute: typeof authenticatedRouteImport
    }
    '/(authenticated)/users/': {
      id: '/(authenticated)/users/'
      path: '/users'
      fullPath: '/users'
      preLoaderRoute: typeof authenticatedUsersIndexImport
      parentRoute: typeof authenticatedRouteImport
    }
    '/(authenticated)/attendances/$attendanceId/': {
      id: '/(authenticated)/attendances/$attendanceId/'
      path: '/attendances/$attendanceId'
      fullPath: '/attendances/$attendanceId'
      preLoaderRoute: typeof authenticatedAttendancesAttendanceIdIndexImport
      parentRoute: typeof authenticatedRouteImport
    }
    '/(authenticated)/attendances/history/': {
      id: '/(authenticated)/attendances/history/'
      path: '/attendances/history'
      fullPath: '/attendances/history'
      preLoaderRoute: typeof authenticatedAttendancesHistoryIndexImport
      parentRoute: typeof authenticatedRouteImport
    }
    '/(authenticated)/attendances/reports/': {
      id: '/(authenticated)/attendances/reports/'
      path: '/attendances/reports'
      fullPath: '/attendances/reports'
      preLoaderRoute: typeof authenticatedAttendancesReportsIndexImport
      parentRoute: typeof authenticatedRouteImport
    }
    '/(authenticated)/dashboard/hrd/': {
      id: '/(authenticated)/dashboard/hrd/'
      path: '/hrd'
      fullPath: '/dashboard/hrd'
      preLoaderRoute: typeof authenticatedDashboardHrdIndexImport
      parentRoute: typeof authenticatedDashboardRouteImport
    }
    '/(authenticated)/dashboard/staff/': {
      id: '/(authenticated)/dashboard/staff/'
      path: '/staff'
      fullPath: '/dashboard/staff'
      preLoaderRoute: typeof authenticatedDashboardStaffIndexImport
      parentRoute: typeof authenticatedDashboardRouteImport
    }
    '/(authenticated)/departments/$departmentId/': {
      id: '/(authenticated)/departments/$departmentId/'
      path: '/departments/$departmentId'
      fullPath: '/departments/$departmentId'
      preLoaderRoute: typeof authenticatedDepartmentsDepartmentIdIndexImport
      parentRoute: typeof authenticatedRouteImport
    }
    '/(authenticated)/departments/create/': {
      id: '/(authenticated)/departments/create/'
      path: '/departments/create'
      fullPath: '/departments/create'
      preLoaderRoute: typeof authenticatedDepartmentsCreateIndexImport
      parentRoute: typeof authenticatedRouteImport
    }
    '/(authenticated)/positions/$positionId/': {
      id: '/(authenticated)/positions/$positionId/'
      path: '/positions/$positionId'
      fullPath: '/positions/$positionId'
      preLoaderRoute: typeof authenticatedPositionsPositionIdIndexImport
      parentRoute: typeof authenticatedRouteImport
    }
    '/(authenticated)/positions/create/': {
      id: '/(authenticated)/positions/create/'
      path: '/positions/create'
      fullPath: '/positions/create'
      preLoaderRoute: typeof authenticatedPositionsCreateIndexImport
      parentRoute: typeof authenticatedRouteImport
    }
    '/(authenticated)/shifts/$shiftId/': {
      id: '/(authenticated)/shifts/$shiftId/'
      path: '/shifts/$shiftId'
      fullPath: '/shifts/$shiftId'
      preLoaderRoute: typeof authenticatedShiftsShiftIdIndexImport
      parentRoute: typeof authenticatedRouteImport
    }
    '/(authenticated)/shifts/create/': {
      id: '/(authenticated)/shifts/create/'
      path: '/shifts/create'
      fullPath: '/shifts/create'
      preLoaderRoute: typeof authenticatedShiftsCreateIndexImport
      parentRoute: typeof authenticatedRouteImport
    }
    '/(authenticated)/users/$userId/': {
      id: '/(authenticated)/users/$userId/'
      path: '/users/$userId'
      fullPath: '/users/$userId'
      preLoaderRoute: typeof authenticatedUsersUserIdIndexImport
      parentRoute: typeof authenticatedRouteImport
    }
    '/(authenticated)/users/create/': {
      id: '/(authenticated)/users/create/'
      path: '/users/create'
      fullPath: '/users/create'
      preLoaderRoute: typeof authenticatedUsersCreateIndexImport
      parentRoute: typeof authenticatedRouteImport
    }
    '/(public)/auth/login/': {
      id: '/(public)/auth/login/'
      path: '/auth/login'
      fullPath: '/auth/login'
      preLoaderRoute: typeof publicAuthLoginIndexImport
      parentRoute: typeof rootRoute
    }
    '/(authenticated)/attendances/presence/clock_in/': {
      id: '/(authenticated)/attendances/presence/clock_in/'
      path: '/attendances/presence/clock_in'
      fullPath: '/attendances/presence/clock_in'
      preLoaderRoute: typeof authenticatedAttendancesPresenceClockinIndexImport
      parentRoute: typeof authenticatedRouteImport
    }
    '/(authenticated)/attendances/presence/clock_out/': {
      id: '/(authenticated)/attendances/presence/clock_out/'
      path: '/attendances/presence/clock_out'
      fullPath: '/attendances/presence/clock_out'
      preLoaderRoute: typeof authenticatedAttendancesPresenceClockoutIndexImport
      parentRoute: typeof authenticatedRouteImport
    }
    '/(authenticated)/departments/$departmentId/update/': {
      id: '/(authenticated)/departments/$departmentId/update/'
      path: '/departments/$departmentId/update'
      fullPath: '/departments/$departmentId/update'
      preLoaderRoute: typeof authenticatedDepartmentsDepartmentIdUpdateIndexImport
      parentRoute: typeof authenticatedRouteImport
    }
    '/(authenticated)/positions/$positionId/update/': {
      id: '/(authenticated)/positions/$positionId/update/'
      path: '/positions/$positionId/update'
      fullPath: '/positions/$positionId/update'
      preLoaderRoute: typeof authenticatedPositionsPositionIdUpdateIndexImport
      parentRoute: typeof authenticatedRouteImport
    }
    '/(authenticated)/shifts/$shiftId/update/': {
      id: '/(authenticated)/shifts/$shiftId/update/'
      path: '/shifts/$shiftId/update'
      fullPath: '/shifts/$shiftId/update'
      preLoaderRoute: typeof authenticatedShiftsShiftIdUpdateIndexImport
      parentRoute: typeof authenticatedRouteImport
    }
    '/(authenticated)/users/$userId/update/': {
      id: '/(authenticated)/users/$userId/update/'
      path: '/users/$userId/update'
      fullPath: '/users/$userId/update'
      preLoaderRoute: typeof authenticatedUsersUserIdUpdateIndexImport
      parentRoute: typeof authenticatedRouteImport
    }
  }
}

// Create and export the route tree

interface authenticatedDashboardRouteRouteChildren {
  authenticatedDashboardHrdIndexRoute: typeof authenticatedDashboardHrdIndexRoute
  authenticatedDashboardStaffIndexRoute: typeof authenticatedDashboardStaffIndexRoute
}

const authenticatedDashboardRouteRouteChildren: authenticatedDashboardRouteRouteChildren =
  {
    authenticatedDashboardHrdIndexRoute: authenticatedDashboardHrdIndexRoute,
    authenticatedDashboardStaffIndexRoute:
      authenticatedDashboardStaffIndexRoute,
  }

const authenticatedDashboardRouteRouteWithChildren =
  authenticatedDashboardRouteRoute._addFileChildren(
    authenticatedDashboardRouteRouteChildren,
  )

interface authenticatedRouteRouteChildren {
  authenticatedDashboardRouteRoute: typeof authenticatedDashboardRouteRouteWithChildren
  authenticatedAttendancesIndexRoute: typeof authenticatedAttendancesIndexRoute
  authenticatedDepartmentsIndexRoute: typeof authenticatedDepartmentsIndexRoute
  authenticatedPositionsIndexRoute: typeof authenticatedPositionsIndexRoute
  authenticatedShiftsIndexRoute: typeof authenticatedShiftsIndexRoute
  authenticatedUsersIndexRoute: typeof authenticatedUsersIndexRoute
  authenticatedAttendancesAttendanceIdIndexRoute: typeof authenticatedAttendancesAttendanceIdIndexRoute
  authenticatedAttendancesHistoryIndexRoute: typeof authenticatedAttendancesHistoryIndexRoute
  authenticatedAttendancesReportsIndexRoute: typeof authenticatedAttendancesReportsIndexRoute
  authenticatedDepartmentsDepartmentIdIndexRoute: typeof authenticatedDepartmentsDepartmentIdIndexRoute
  authenticatedDepartmentsCreateIndexRoute: typeof authenticatedDepartmentsCreateIndexRoute
  authenticatedPositionsPositionIdIndexRoute: typeof authenticatedPositionsPositionIdIndexRoute
  authenticatedPositionsCreateIndexRoute: typeof authenticatedPositionsCreateIndexRoute
  authenticatedShiftsShiftIdIndexRoute: typeof authenticatedShiftsShiftIdIndexRoute
  authenticatedShiftsCreateIndexRoute: typeof authenticatedShiftsCreateIndexRoute
  authenticatedUsersUserIdIndexRoute: typeof authenticatedUsersUserIdIndexRoute
  authenticatedUsersCreateIndexRoute: typeof authenticatedUsersCreateIndexRoute
  authenticatedAttendancesPresenceClockinIndexRoute: typeof authenticatedAttendancesPresenceClockinIndexRoute
  authenticatedAttendancesPresenceClockoutIndexRoute: typeof authenticatedAttendancesPresenceClockoutIndexRoute
  authenticatedDepartmentsDepartmentIdUpdateIndexRoute: typeof authenticatedDepartmentsDepartmentIdUpdateIndexRoute
  authenticatedPositionsPositionIdUpdateIndexRoute: typeof authenticatedPositionsPositionIdUpdateIndexRoute
  authenticatedShiftsShiftIdUpdateIndexRoute: typeof authenticatedShiftsShiftIdUpdateIndexRoute
  authenticatedUsersUserIdUpdateIndexRoute: typeof authenticatedUsersUserIdUpdateIndexRoute
}

const authenticatedRouteRouteChildren: authenticatedRouteRouteChildren = {
  authenticatedDashboardRouteRoute:
    authenticatedDashboardRouteRouteWithChildren,
  authenticatedAttendancesIndexRoute: authenticatedAttendancesIndexRoute,
  authenticatedDepartmentsIndexRoute: authenticatedDepartmentsIndexRoute,
  authenticatedPositionsIndexRoute: authenticatedPositionsIndexRoute,
  authenticatedShiftsIndexRoute: authenticatedShiftsIndexRoute,
  authenticatedUsersIndexRoute: authenticatedUsersIndexRoute,
  authenticatedAttendancesAttendanceIdIndexRoute:
    authenticatedAttendancesAttendanceIdIndexRoute,
  authenticatedAttendancesHistoryIndexRoute:
    authenticatedAttendancesHistoryIndexRoute,
  authenticatedAttendancesReportsIndexRoute:
    authenticatedAttendancesReportsIndexRoute,
  authenticatedDepartmentsDepartmentIdIndexRoute:
    authenticatedDepartmentsDepartmentIdIndexRoute,
  authenticatedDepartmentsCreateIndexRoute:
    authenticatedDepartmentsCreateIndexRoute,
  authenticatedPositionsPositionIdIndexRoute:
    authenticatedPositionsPositionIdIndexRoute,
  authenticatedPositionsCreateIndexRoute:
    authenticatedPositionsCreateIndexRoute,
  authenticatedShiftsShiftIdIndexRoute: authenticatedShiftsShiftIdIndexRoute,
  authenticatedShiftsCreateIndexRoute: authenticatedShiftsCreateIndexRoute,
  authenticatedUsersUserIdIndexRoute: authenticatedUsersUserIdIndexRoute,
  authenticatedUsersCreateIndexRoute: authenticatedUsersCreateIndexRoute,
  authenticatedAttendancesPresenceClockinIndexRoute:
    authenticatedAttendancesPresenceClockinIndexRoute,
  authenticatedAttendancesPresenceClockoutIndexRoute:
    authenticatedAttendancesPresenceClockoutIndexRoute,
  authenticatedDepartmentsDepartmentIdUpdateIndexRoute:
    authenticatedDepartmentsDepartmentIdUpdateIndexRoute,
  authenticatedPositionsPositionIdUpdateIndexRoute:
    authenticatedPositionsPositionIdUpdateIndexRoute,
  authenticatedShiftsShiftIdUpdateIndexRoute:
    authenticatedShiftsShiftIdUpdateIndexRoute,
  authenticatedUsersUserIdUpdateIndexRoute:
    authenticatedUsersUserIdUpdateIndexRoute,
}

const authenticatedRouteRouteWithChildren =
  authenticatedRouteRoute._addFileChildren(authenticatedRouteRouteChildren)

interface RouteChildren {
  authenticatedRouteRoute: typeof authenticatedRouteRouteWithChildren
}

const RouteChildren: RouteChildren = {
  authenticatedRouteRoute: authenticatedRouteRouteWithChildren,
}

const RouteWithChildren = Route._addFileChildren(RouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof authenticatedRouteRouteWithChildren
  '/denied': typeof DeniedRoute
  '/not-found': typeof NotFoundRoute
  '/dashboard': typeof authenticatedDashboardRouteRouteWithChildren
  '/attendances': typeof authenticatedAttendancesIndexRoute
  '/departments': typeof authenticatedDepartmentsIndexRoute
  '/positions': typeof authenticatedPositionsIndexRoute
  '/shifts': typeof authenticatedShiftsIndexRoute
  '/users': typeof authenticatedUsersIndexRoute
  '/attendances/$attendanceId': typeof authenticatedAttendancesAttendanceIdIndexRoute
  '/attendances/history': typeof authenticatedAttendancesHistoryIndexRoute
  '/attendances/reports': typeof authenticatedAttendancesReportsIndexRoute
  '/dashboard/hrd': typeof authenticatedDashboardHrdIndexRoute
  '/dashboard/staff': typeof authenticatedDashboardStaffIndexRoute
  '/departments/$departmentId': typeof authenticatedDepartmentsDepartmentIdIndexRoute
  '/departments/create': typeof authenticatedDepartmentsCreateIndexRoute
  '/positions/$positionId': typeof authenticatedPositionsPositionIdIndexRoute
  '/positions/create': typeof authenticatedPositionsCreateIndexRoute
  '/shifts/$shiftId': typeof authenticatedShiftsShiftIdIndexRoute
  '/shifts/create': typeof authenticatedShiftsCreateIndexRoute
  '/users/$userId': typeof authenticatedUsersUserIdIndexRoute
  '/users/create': typeof authenticatedUsersCreateIndexRoute
  '/auth/login': typeof publicAuthLoginIndexRoute
  '/attendances/presence/clock_in': typeof authenticatedAttendancesPresenceClockinIndexRoute
  '/attendances/presence/clock_out': typeof authenticatedAttendancesPresenceClockoutIndexRoute
  '/departments/$departmentId/update': typeof authenticatedDepartmentsDepartmentIdUpdateIndexRoute
  '/positions/$positionId/update': typeof authenticatedPositionsPositionIdUpdateIndexRoute
  '/shifts/$shiftId/update': typeof authenticatedShiftsShiftIdUpdateIndexRoute
  '/users/$userId/update': typeof authenticatedUsersUserIdUpdateIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof authenticatedRouteRouteWithChildren
  '/denied': typeof DeniedRoute
  '/not-found': typeof NotFoundRoute
  '/dashboard': typeof authenticatedDashboardRouteRouteWithChildren
  '/attendances': typeof authenticatedAttendancesIndexRoute
  '/departments': typeof authenticatedDepartmentsIndexRoute
  '/positions': typeof authenticatedPositionsIndexRoute
  '/shifts': typeof authenticatedShiftsIndexRoute
  '/users': typeof authenticatedUsersIndexRoute
  '/attendances/$attendanceId': typeof authenticatedAttendancesAttendanceIdIndexRoute
  '/attendances/history': typeof authenticatedAttendancesHistoryIndexRoute
  '/attendances/reports': typeof authenticatedAttendancesReportsIndexRoute
  '/dashboard/hrd': typeof authenticatedDashboardHrdIndexRoute
  '/dashboard/staff': typeof authenticatedDashboardStaffIndexRoute
  '/departments/$departmentId': typeof authenticatedDepartmentsDepartmentIdIndexRoute
  '/departments/create': typeof authenticatedDepartmentsCreateIndexRoute
  '/positions/$positionId': typeof authenticatedPositionsPositionIdIndexRoute
  '/positions/create': typeof authenticatedPositionsCreateIndexRoute
  '/shifts/$shiftId': typeof authenticatedShiftsShiftIdIndexRoute
  '/shifts/create': typeof authenticatedShiftsCreateIndexRoute
  '/users/$userId': typeof authenticatedUsersUserIdIndexRoute
  '/users/create': typeof authenticatedUsersCreateIndexRoute
  '/auth/login': typeof publicAuthLoginIndexRoute
  '/attendances/presence/clock_in': typeof authenticatedAttendancesPresenceClockinIndexRoute
  '/attendances/presence/clock_out': typeof authenticatedAttendancesPresenceClockoutIndexRoute
  '/departments/$departmentId/update': typeof authenticatedDepartmentsDepartmentIdUpdateIndexRoute
  '/positions/$positionId/update': typeof authenticatedPositionsPositionIdUpdateIndexRoute
  '/shifts/$shiftId/update': typeof authenticatedShiftsShiftIdUpdateIndexRoute
  '/users/$userId/update': typeof authenticatedUsersUserIdUpdateIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof RouteWithChildren
  '/(authenticated)': typeof authenticatedRouteRouteWithChildren
  '/denied': typeof DeniedRoute
  '/not-found': typeof NotFoundRoute
  '/(authenticated)/dashboard': typeof authenticatedDashboardRouteRouteWithChildren
  '/(authenticated)/attendances/': typeof authenticatedAttendancesIndexRoute
  '/(authenticated)/departments/': typeof authenticatedDepartmentsIndexRoute
  '/(authenticated)/positions/': typeof authenticatedPositionsIndexRoute
  '/(authenticated)/shifts/': typeof authenticatedShiftsIndexRoute
  '/(authenticated)/users/': typeof authenticatedUsersIndexRoute
  '/(authenticated)/attendances/$attendanceId/': typeof authenticatedAttendancesAttendanceIdIndexRoute
  '/(authenticated)/attendances/history/': typeof authenticatedAttendancesHistoryIndexRoute
  '/(authenticated)/attendances/reports/': typeof authenticatedAttendancesReportsIndexRoute
  '/(authenticated)/dashboard/hrd/': typeof authenticatedDashboardHrdIndexRoute
  '/(authenticated)/dashboard/staff/': typeof authenticatedDashboardStaffIndexRoute
  '/(authenticated)/departments/$departmentId/': typeof authenticatedDepartmentsDepartmentIdIndexRoute
  '/(authenticated)/departments/create/': typeof authenticatedDepartmentsCreateIndexRoute
  '/(authenticated)/positions/$positionId/': typeof authenticatedPositionsPositionIdIndexRoute
  '/(authenticated)/positions/create/': typeof authenticatedPositionsCreateIndexRoute
  '/(authenticated)/shifts/$shiftId/': typeof authenticatedShiftsShiftIdIndexRoute
  '/(authenticated)/shifts/create/': typeof authenticatedShiftsCreateIndexRoute
  '/(authenticated)/users/$userId/': typeof authenticatedUsersUserIdIndexRoute
  '/(authenticated)/users/create/': typeof authenticatedUsersCreateIndexRoute
  '/(public)/auth/login/': typeof publicAuthLoginIndexRoute
  '/(authenticated)/attendances/presence/clock_in/': typeof authenticatedAttendancesPresenceClockinIndexRoute
  '/(authenticated)/attendances/presence/clock_out/': typeof authenticatedAttendancesPresenceClockoutIndexRoute
  '/(authenticated)/departments/$departmentId/update/': typeof authenticatedDepartmentsDepartmentIdUpdateIndexRoute
  '/(authenticated)/positions/$positionId/update/': typeof authenticatedPositionsPositionIdUpdateIndexRoute
  '/(authenticated)/shifts/$shiftId/update/': typeof authenticatedShiftsShiftIdUpdateIndexRoute
  '/(authenticated)/users/$userId/update/': typeof authenticatedUsersUserIdUpdateIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/denied'
    | '/not-found'
    | '/dashboard'
    | '/attendances'
    | '/departments'
    | '/positions'
    | '/shifts'
    | '/users'
    | '/attendances/$attendanceId'
    | '/attendances/history'
    | '/attendances/reports'
    | '/dashboard/hrd'
    | '/dashboard/staff'
    | '/departments/$departmentId'
    | '/departments/create'
    | '/positions/$positionId'
    | '/positions/create'
    | '/shifts/$shiftId'
    | '/shifts/create'
    | '/users/$userId'
    | '/users/create'
    | '/auth/login'
    | '/attendances/presence/clock_in'
    | '/attendances/presence/clock_out'
    | '/departments/$departmentId/update'
    | '/positions/$positionId/update'
    | '/shifts/$shiftId/update'
    | '/users/$userId/update'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/denied'
    | '/not-found'
    | '/dashboard'
    | '/attendances'
    | '/departments'
    | '/positions'
    | '/shifts'
    | '/users'
    | '/attendances/$attendanceId'
    | '/attendances/history'
    | '/attendances/reports'
    | '/dashboard/hrd'
    | '/dashboard/staff'
    | '/departments/$departmentId'
    | '/departments/create'
    | '/positions/$positionId'
    | '/positions/create'
    | '/shifts/$shiftId'
    | '/shifts/create'
    | '/users/$userId'
    | '/users/create'
    | '/auth/login'
    | '/attendances/presence/clock_in'
    | '/attendances/presence/clock_out'
    | '/departments/$departmentId/update'
    | '/positions/$positionId/update'
    | '/shifts/$shiftId/update'
    | '/users/$userId/update'
  id:
    | '__root__'
    | '/'
    | '/(authenticated)'
    | '/denied'
    | '/not-found'
    | '/(authenticated)/dashboard'
    | '/(authenticated)/attendances/'
    | '/(authenticated)/departments/'
    | '/(authenticated)/positions/'
    | '/(authenticated)/shifts/'
    | '/(authenticated)/users/'
    | '/(authenticated)/attendances/$attendanceId/'
    | '/(authenticated)/attendances/history/'
    | '/(authenticated)/attendances/reports/'
    | '/(authenticated)/dashboard/hrd/'
    | '/(authenticated)/dashboard/staff/'
    | '/(authenticated)/departments/$departmentId/'
    | '/(authenticated)/departments/create/'
    | '/(authenticated)/positions/$positionId/'
    | '/(authenticated)/positions/create/'
    | '/(authenticated)/shifts/$shiftId/'
    | '/(authenticated)/shifts/create/'
    | '/(authenticated)/users/$userId/'
    | '/(authenticated)/users/create/'
    | '/(public)/auth/login/'
    | '/(authenticated)/attendances/presence/clock_in/'
    | '/(authenticated)/attendances/presence/clock_out/'
    | '/(authenticated)/departments/$departmentId/update/'
    | '/(authenticated)/positions/$positionId/update/'
    | '/(authenticated)/shifts/$shiftId/update/'
    | '/(authenticated)/users/$userId/update/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  Route: typeof RouteWithChildren
  DeniedRoute: typeof DeniedRoute
  NotFoundRoute: typeof NotFoundRoute
  publicAuthLoginIndexRoute: typeof publicAuthLoginIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  Route: RouteWithChildren,
  DeniedRoute: DeniedRoute,
  NotFoundRoute: NotFoundRoute,
  publicAuthLoginIndexRoute: publicAuthLoginIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/denied",
        "/not-found",
        "/(public)/auth/login/"
      ]
    },
    "/": {
      "filePath": "(authenticated)",
      "children": [
        "/(authenticated)"
      ]
    },
    "/(authenticated)": {
      "filePath": "(authenticated)/route.tsx",
      "parent": "/",
      "children": [
        "/(authenticated)/dashboard",
        "/(authenticated)/attendances/",
        "/(authenticated)/departments/",
        "/(authenticated)/positions/",
        "/(authenticated)/shifts/",
        "/(authenticated)/users/",
        "/(authenticated)/attendances/$attendanceId/",
        "/(authenticated)/attendances/history/",
        "/(authenticated)/attendances/reports/",
        "/(authenticated)/departments/$departmentId/",
        "/(authenticated)/departments/create/",
        "/(authenticated)/positions/$positionId/",
        "/(authenticated)/positions/create/",
        "/(authenticated)/shifts/$shiftId/",
        "/(authenticated)/shifts/create/",
        "/(authenticated)/users/$userId/",
        "/(authenticated)/users/create/",
        "/(authenticated)/attendances/presence/clock_in/",
        "/(authenticated)/attendances/presence/clock_out/",
        "/(authenticated)/departments/$departmentId/update/",
        "/(authenticated)/positions/$positionId/update/",
        "/(authenticated)/shifts/$shiftId/update/",
        "/(authenticated)/users/$userId/update/"
      ]
    },
    "/denied": {
      "filePath": "denied.tsx"
    },
    "/not-found": {
      "filePath": "not-found.tsx"
    },
    "/(authenticated)/dashboard": {
      "filePath": "(authenticated)/dashboard/route.tsx",
      "parent": "/(authenticated)",
      "children": [
        "/(authenticated)/dashboard/hrd/",
        "/(authenticated)/dashboard/staff/"
      ]
    },
    "/(authenticated)/attendances/": {
      "filePath": "(authenticated)/attendances/index.tsx",
      "parent": "/(authenticated)"
    },
    "/(authenticated)/departments/": {
      "filePath": "(authenticated)/departments/index.tsx",
      "parent": "/(authenticated)"
    },
    "/(authenticated)/positions/": {
      "filePath": "(authenticated)/positions/index.tsx",
      "parent": "/(authenticated)"
    },
    "/(authenticated)/shifts/": {
      "filePath": "(authenticated)/shifts/index.tsx",
      "parent": "/(authenticated)"
    },
    "/(authenticated)/users/": {
      "filePath": "(authenticated)/users/index.tsx",
      "parent": "/(authenticated)"
    },
    "/(authenticated)/attendances/$attendanceId/": {
      "filePath": "(authenticated)/attendances/$attendanceId/index.tsx",
      "parent": "/(authenticated)"
    },
    "/(authenticated)/attendances/history/": {
      "filePath": "(authenticated)/attendances/history/index.tsx",
      "parent": "/(authenticated)"
    },
    "/(authenticated)/attendances/reports/": {
      "filePath": "(authenticated)/attendances/reports/index.tsx",
      "parent": "/(authenticated)"
    },
    "/(authenticated)/dashboard/hrd/": {
      "filePath": "(authenticated)/dashboard/hrd/index.tsx",
      "parent": "/(authenticated)/dashboard"
    },
    "/(authenticated)/dashboard/staff/": {
      "filePath": "(authenticated)/dashboard/staff/index.tsx",
      "parent": "/(authenticated)/dashboard"
    },
    "/(authenticated)/departments/$departmentId/": {
      "filePath": "(authenticated)/departments/$departmentId/index.tsx",
      "parent": "/(authenticated)"
    },
    "/(authenticated)/departments/create/": {
      "filePath": "(authenticated)/departments/create/index.tsx",
      "parent": "/(authenticated)"
    },
    "/(authenticated)/positions/$positionId/": {
      "filePath": "(authenticated)/positions/$positionId/index.tsx",
      "parent": "/(authenticated)"
    },
    "/(authenticated)/positions/create/": {
      "filePath": "(authenticated)/positions/create/index.tsx",
      "parent": "/(authenticated)"
    },
    "/(authenticated)/shifts/$shiftId/": {
      "filePath": "(authenticated)/shifts/$shiftId/index.tsx",
      "parent": "/(authenticated)"
    },
    "/(authenticated)/shifts/create/": {
      "filePath": "(authenticated)/shifts/create/index.tsx",
      "parent": "/(authenticated)"
    },
    "/(authenticated)/users/$userId/": {
      "filePath": "(authenticated)/users/$userId/index.tsx",
      "parent": "/(authenticated)"
    },
    "/(authenticated)/users/create/": {
      "filePath": "(authenticated)/users/create/index.tsx",
      "parent": "/(authenticated)"
    },
    "/(public)/auth/login/": {
      "filePath": "(public)/auth/login/index.tsx"
    },
    "/(authenticated)/attendances/presence/clock_in/": {
      "filePath": "(authenticated)/attendances/presence/clock_in/index.tsx",
      "parent": "/(authenticated)"
    },
    "/(authenticated)/attendances/presence/clock_out/": {
      "filePath": "(authenticated)/attendances/presence/clock_out/index.tsx",
      "parent": "/(authenticated)"
    },
    "/(authenticated)/departments/$departmentId/update/": {
      "filePath": "(authenticated)/departments/$departmentId/update/index.tsx",
      "parent": "/(authenticated)"
    },
    "/(authenticated)/positions/$positionId/update/": {
      "filePath": "(authenticated)/positions/$positionId/update/index.tsx",
      "parent": "/(authenticated)"
    },
    "/(authenticated)/shifts/$shiftId/update/": {
      "filePath": "(authenticated)/shifts/$shiftId/update/index.tsx",
      "parent": "/(authenticated)"
    },
    "/(authenticated)/users/$userId/update/": {
      "filePath": "(authenticated)/users/$userId/update/index.tsx",
      "parent": "/(authenticated)"
    }
  }
}
ROUTE_MANIFEST_END */
