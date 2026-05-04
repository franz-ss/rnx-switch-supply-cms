export const staticLink = (staticRoute: string) => ({
  kind: 'static' as const,
  staticRoute,
})

export const emailLink = (emailAddress: string, emailSubject?: string) => ({
  kind: 'email' as const,
  emailAddress,
  ...(emailSubject ? {emailSubject} : {}),
})

export const phoneLink = (phoneNumber: string) => ({
  kind: 'phone' as const,
  phoneNumber,
})

export const staticCta = (label: string, staticRoute: string) => ({
  label,
  link: staticLink(staticRoute),
})

export const emailCta = (label: string, emailAddress: string, emailSubject?: string) => ({
  label,
  link: emailLink(emailAddress, emailSubject),
})
