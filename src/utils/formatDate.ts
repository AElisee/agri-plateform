export const formatDate = (dateString: string) =>
  new Intl.DateTimeFormat("fr-FR").format(new Date(dateString));
