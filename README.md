# Willis Frontend

🌐 **Live Demo:** [Klicka här för att testa appen](https://willis-frontend-production.up.railway.app/)

🔗 **Backend Repo:** [Se koden för backend här](https://github.com/erikcerne/Willis-backend)

## Pitch

Den dyraste maten är den du slänger.

Det här är frontend-delen av en full-stack lösning för att automatisera matvaruhantering, minska matsvinn och ge användaren en digital skafferiupplevelse utan manuell scanning. Appen synkar användarens inköp med ett smart skafferi och ger tydlig överblick över färska och utgångna produkter.

---

## Vad appen gör

- Visar ett användarspecifikt skafferi med aktiva varor och utgångna produkter.
- Samlar samma artikel i grupper och ger möjlighet att se varje batch separat.
- Visar kvarvarande tid till bäst-före via färgkodade progress-bars.
- Låter användaren hantera kvantitet, radera varor och skicka artiklar till inköpslista.
- Använder Auth0 för inloggning och token-baserad kommunikation med ett Spring Boot-backend.

---

## Tech stack

- React 19
- TypeScript / TSX
- Vite
- Auth0 (`@auth0/auth0-react`)
- React Query (`@tanstack/react-query`)
- TanStack Router (`@tanstack/react-router`)
- Tailwind CSS + DaisyUI
- Deployment på Railway
- Backend: Spring Boot
- Databas: Supabase / PostgreSQL

---

## Arkitektur och komponentstruktur

### Övergripande flöde

1. `src/main.tsx` initierar appen med `Auth0Provider` och `QueryClientProvider`.
2. `src/App.tsx` använder `RouterProvider` för att leverera routes.
3. `src/routes/__root.tsx` skapar grundlayout med `Header`, `Footer` och `Outlet`.
4. `src/hooks/useAuth.ts` hanterar Auth0-session, login/logout och synk mot backend `/users/register`.

### Viktiga vyer

- `src/routes/inventory.tsx` är huvudvyn för skafferiet.
- `src/routes/shoppingList.tsx` visar användarens inköpslista.
- `src/routes/index.tsx` är startsidan med visuell presentation.

### API och datahantering

- `src/features/inventory/api.ts`
  - `GET /inventory` hämtar skafferidata.
  - `POST /inventory` lägger till artiklar i lagret.
  - `PUT /inventory/{id}` uppdaterar kvantitet.
  - `DELETE /inventory/{id}` tar bort en artikel.
  - `DELETE /inventory/expired` rensar utgångna varor.

- `src/features/shopping-list/api.ts`
  - `GET /shopping` hämtar inköpslistan.
  - `DELETE /shopping?id={id}` tar bort rad från listan.
  - `POST /shopping?inventoryId={inventoryId}` lägger till varor i inköpslistan.

- `src/hooks/useAuth.ts` använder Auth0-token för backend-synk.

### UI-komponenter

- `src/components/Header.tsx` visar sida och inloggningsstatus.
- `src/components/Footer.tsx` är navigationsmenyn i botten.
- `src/features/inventory/ItemCard.tsx` visar grupperade artiklar med bild och sammanfattning.
- `src/features/inventory/OneItem.tsx` visar enskilda batcher med progress, datum och åtgärder.
- `src/features/inventory/DropDown.tsx` hanterar utökade vyer för artiklar med flera datum.
- `src/features/shopping-list/ItemShoping.tsx` visar inköpslista och raderingsfunktion.

---

## Nyckelfunktioner i frontend

- **Mitt Skafferi**
  - Visar endast icke-utgångna varor i aktivt lager.
  - Grupperar samma artikel med flera partier i expanderbara kort.
  - Räknar och visar total kvantitet per artikel.
  - Smarta delete-/quantity-funktioner för att minska svinn.

- **Utgångna varor**
  - Separat vy och filter för utgångna produkter.
  - Färgkodad hållbarhetsindikator: grön, gul, röd.
  - Bulk delete med knapp för att rensa alla utgångna varor.

- **Sök & filtrering**
  - Sökfält finns i både Lager och Inköpslista.
  - Filter för `Alla`, `Färska` och `Utgångna` i inventory-vyn.

- **Bild- och UX-stöd**
  - Produktbilder visas direkt i inventory-korten.
  - Intuitiva knappar med feedback för radera, lägga till inköpslista och redigera antal.
  - Enkel mobilvänlig layout med tydliga kort och knappstorlek.

---

## Installation och körning

1. Klona repot:

```powershell
git clone <repo-url>
cd willis-frontend
```

2. Installera beroenden:

```powershell
npm install
```

3. Skapa `.env` i projektets rot med följande variabler. Kontrollera gärna `.env.example` för en mall som matchar produktionsmiljön:

```env
VITE_API_BASE_URL=https://din-backend-url
VITE_AUTH0_AUDIENCE=din-auth0-audience
VITE_AUTH0_CLIENT_ID=din-auth0-client-id
VITE_AUTH0_DOMAIN=din-auth0-domain
```

4. Starta utvecklingsservern:

```powershell
npm run dev
```

5. Bygg för produktion:

```powershell
npm run build
```

### Auth0-konfiguration

- Skapa en Auth0-applikation av typen `Single Page Application`.
- Lägg till `http://localhost:5173` som `Allowed Callback URL`, `Allowed Logout URL` och `Allowed Web Origin`.
- Använd samma `audience` både i Auth0 och backend.
- Säkerställ att backend accepterar JWT från Auth0.

---

## Deployment

- Appen är byggd för deployment på Railway eller liknande Vite-värdar.
- Konfigurera miljövariabler i produktionsmiljön med samma nycklar som i `.env`.
- Backend måste vara åtkomlig från frontend och acceptera Auth0-token.

---

## Framtida vidareutveckling

- Receptgenerator som föreslår maträtter baserat på vad som finns i skafferiet.
- Notiser för varor som närmar sig bäst-före-datum.
- QR/2D-kodsintegration för snabb inmatning av nya varor vid köp.
- Mer avancerad filtrering: kategori, datumintervall och status.
- Offline-caching och snabbare lokal vy när nätverket är svagt.

---

## Viktiga filer

- `package.json` - beroenden och scripts
- `src/main.tsx` - initiering av Auth0 och React Query
- `src/App.tsx` - router provider
- `src/routes/__root.tsx` - layout med Header/Footer
- `src/routes/inventory.tsx` - inventory-vy
- `src/routes/shoppingList.tsx` - inköpslista-vy
- `src/features/inventory/api.ts` - inventory-API-anrop
- `src/features/shopping-list/api.ts` - shoppinglist-API-anrop
- `src/hooks/useAuth.ts` - Auth0-autentisering och backend-synk

---

## Kontakt

Använd detta repo som utgångspunkt för att bygga en matvaruhanteringsplattform med smarta inköpslistor, hållbarhetsindikatorer och dynamiska varningssystem.
