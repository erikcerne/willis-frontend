import type { ReceiveInventoryDto } from "../../Types";

export const MOCK_CARTS: ReceiveInventoryDto[][] = [
  // VAGN 1: Handlad nyligen (2026-04-26). Frukost & Bakning.
  [
    { produceDate: "2026-04-26T10:00:00", expiryDate: "2026-05-15T23:59:59", quantity: 2, productId: "2e83a8eb-b16e-454a-ac53-7f31bc002303", userId: "" }, // Ägg
    { produceDate: "2026-04-26T10:00:00", expiryDate: "2026-05-05T23:59:59", quantity: 4, productId: "3574a016-fc3e-42c1-9154-bd151cd2216d", userId: "" }, // Jäst
    { produceDate: "2024-04-26T10:00:00", expiryDate: "2024-05-03T23:59:59", quantity: 3, productId: "d7757be8-2dc0-4b31-bb6d-53654279f315", userId: "" }, // Lantmjölk
    { produceDate: "2026-04-26T10:00:00", expiryDate: "2026-05-02T23:59:59", quantity: 1, productId: "644ffc67-2f08-4e97-90d2-ebf02a384f47", userId: "" }, // Vispgrädde
    { produceDate: "2026-04-26T10:00:00", expiryDate: "2026-12-01T23:59:59", quantity: 1, productId: "6ca2e10b-a73a-472f-87a0-4ad04c034cee", userId: "" }, // Kanelbullar
    { produceDate: "2024-04-26T10:00:00", expiryDate: "2025-06-10T23:59:59", quantity: 1, productId: "2cb9b8f1-e3ec-4944-8921-21a54421d4a1", userId: "" }, // Bregott
    { produceDate: "2026-04-26T10:00:00", expiryDate: "2027-01-01T23:59:59", quantity: 2, productId: "1f482d47-7dc6-48ad-b6aa-9eb0c03faba8", userId: "" }, // Majskorn
  ],
  // VAGN 2: Handlad igår (2026-04-27). Snabb middag. Samma varor som ovan men med ANDRA datum.
  [
    { produceDate: "2026-04-27T17:30:00", expiryDate: "2026-05-04T23:59:59", quantity: 2, productId: "5e6ce947-7d49-4914-9c0c-01fad41d49ab", userId: "" }, // Färsk pasta
    { produceDate: "2026-04-27T17:30:00", expiryDate: "2026-05-10T23:59:59", quantity: 1, productId: "135174a4-ae0c-4b9a-90cd-63c14b46d1cf", userId: "" }, // Rökt skinka
    { produceDate: "2026-04-27T17:30:00", expiryDate: "2026-05-05T23:59:59", quantity: 2, productId: "644ffc67-2f08-4e97-90d2-ebf02a384f47", userId: "" }, // Vispgrädde (annat datum än vagn 1)
    { produceDate: "2026-04-27T17:30:00", expiryDate: "2027-07-10T23:59:59", quantity: 4, productId: "2a1d13cf-8f27-4324-899e-bd58223024f1", userId: "" }, // Krossade tomater
    { produceDate: "2026-03-27T17:30:00", expiryDate: "2026-04-08T23:59:59", quantity: 1, productId: "8adfec8a-2e0b-47a2-b0aa-db4343b78806", userId: "" }, // Hummus
    { produceDate: "2026-04-27T17:30:00", expiryDate: "2026-04-18T23:59:59", quantity: 1, productId: "2e83a8eb-b16e-454a-ac53-7f31bc002303", userId: "" }, // Ägg (annat datum än vagn 1)
    { produceDate: "2026-04-27T17:30:00", expiryDate: "2026-05-04T23:59:59", quantity: 1, productId: "d7757be8-2dc0-4b31-bb6d-53654279f315", userId: "" }, // Lantmjölk (annat datum än vagn 1)
  ],
  // VAGN 3: Handlad för 3 veckor sedan (2026-04-07). Innehåller UTGÅNGNA varor.
  [
    { produceDate: "2026-04-07T12:00:00", expiryDate: "2027-04-01T23:59:59", quantity: 3, productId: "233bff6c-365d-4a70-a12a-95fe9d3aed17", userId: "" }, // Röda linser
    { produceDate: "2026-04-07T12:00:00", expiryDate: "2028-01-01T23:59:59", quantity: 5, productId: "b7258b23-baa5-4122-a5ed-d7a14f0cc206", userId: "" }, // Tonfisk
    { produceDate: "2026-04-07T12:00:00", expiryDate: "2027-02-01T23:59:59", quantity: 2, productId: "7aa16a98-6e64-4593-803d-554bbc6f82b6", userId: "" }, // Vita bönor
    { produceDate: "2026-04-07T12:00:00", expiryDate: "2026-04-14T23:59:59", quantity: 2, productId: "d7757be8-2dc0-4b31-bb6d-53654279f315", userId: "" }, // Lantmjölk (UTGÅNGEN)
    { produceDate: "2024-04-07T12:00:00", expiryDate: "2025-04-20T23:59:59", quantity: 2, productId: "3574a016-fc3e-42c1-9154-bd151cd2216d", userId: "" }, // Jäst (UTGÅNGEN)
    { produceDate: "2026-04-07T12:00:00", expiryDate: "2026-04-18T23:59:59", quantity: 1, productId: "8adfec8a-2e0b-47a2-b0aa-db4343b78806", userId: "" }, // Hummus (UTGÅNGEN)
    { produceDate: "2026-04-07T12:00:00", expiryDate: "2026-04-25T23:59:59", quantity: 1, productId: "8a014424-1926-4e9a-956c-0cac96166381", userId: "" }, // Prinskorv (UTGÅNGEN)
  ],
  // VAGN 4: Fryspåfyllning handlad nyligen (2026-04-25). Långa datum.
  [
    { produceDate: "2024-04-25T14:15:00", expiryDate: "2025-10-01T23:59:59", quantity: 2, productId: "c6689ea3-df48-4a2b-9b1d-6889cbaa7f31", userId: "" }, // Kycklingfilé
    { produceDate: "2026-04-25T14:15:00", expiryDate: "2026-11-01T23:59:59", quantity: 2, productId: "fdb4503c-3cd6-4172-871e-3e664ce705c0", userId: "" }, // Laxfilé
    { produceDate: "2026-04-25T14:15:00", expiryDate: "2026-12-15T23:59:59", quantity: 1, productId: "14e311e1-c4ed-4f75-be03-b6731fa19ef0", userId: "" }, // Mango
    { produceDate: "2026-04-25T14:15:00", expiryDate: "2027-01-10T23:59:59", quantity: 3, productId: "b5ca9a69-d700-4b34-8cef-40c58ade43e3", userId: "" }, // Gröna ärtor
    { produceDate: "2024-04-25T14:15:00", expiryDate: "2025-05-01T23:59:59", quantity: 2, productId: "2a1d13cf-8f27-4324-899e-bd58223024f1", userId: "" }, // Krossade tomater
    { produceDate: "2026-04-25T14:15:00", expiryDate: "2026-05-12T23:59:59", quantity: 1, productId: "900fdccc-6c8b-4b4c-960e-416aa481c9ce", userId: "" }, // Grekisk Yoghurt
    { produceDate: "2026-04-25T14:15:00", expiryDate: "2026-05-08T23:59:59", quantity: 2, productId: "135174a4-ae0c-4b9a-90cd-63c14b46d1cf", userId: "" }, // Rökt skinka (annat datum)
  ],
  // VAGN 5: Handlad för ett tag sedan (2026-04-10). Mixat, vissa har gått ut.
  [
    { produceDate: "2026-04-10T09:00:00", expiryDate: "2026-04-17T23:59:59", quantity: 1, productId: "5e6ce947-7d49-4914-9c0c-01fad41d49ab", userId: "" }, // Färsk pasta (UTGÅNGEN)
    { produceDate: "2026-04-10T09:00:00", expiryDate: "2026-04-16T23:59:59", quantity: 1, productId: "644ffc67-2f08-4e97-90d2-ebf02a384f47", userId: "" }, // Vispgrädde (UTGÅNGEN)
    { produceDate: "2026-04-10T09:00:00", expiryDate: "2026-10-15T23:59:59", quantity: 1, productId: "fdb4503c-3cd6-4172-871e-3e664ce705c0", userId: "" }, // Laxfilé (ok datum)
    { produceDate: "2026-04-10T09:00:00", expiryDate: "2026-05-01T23:59:59", quantity: 2, productId: "2e83a8eb-b16e-454a-ac53-7f31bc002303", userId: "" }, // Ägg (går ut snart)
    { produceDate: "2023-04-10T09:00:00", expiryDate: "2024-06-01T23:59:59", quantity: 1, productId: "2cb9b8f1-e3ec-4944-8921-21a54421d4a1", userId: "" }, // Bregott
    { produceDate: "2026-04-10T09:00:00", expiryDate: "2027-01-01T23:59:59", quantity: 1, productId: "1f482d47-7dc6-48ad-b6aa-9eb0c03faba8", userId: "" }, // Majskorn
    { produceDate: "2026-04-10T09:00:00", expiryDate: "2026-11-01T23:59:59", quantity: 2, productId: "6ca2e10b-a73a-472f-87a0-4ad04c034cee", userId: "" }, // Kanelbullar
  ],
  // VAGN 6: Storhandling (2026-04-22).
  [
    { produceDate: "2026-04-22T16:45:00", expiryDate: "2026-05-05T23:59:59", quantity: 2, productId: "8a014424-1926-4e9a-956c-0cac96166381", userId: "" }, // Prinskorv
    { produceDate: "2026-04-22T16:45:00", expiryDate: "2026-05-10T23:59:59", quantity: 2, productId: "900fdccc-6c8b-4b4c-960e-416aa481c9ce", userId: "" }, // Grekisk yoghurt
    { produceDate: "2026-04-22T16:45:00", expiryDate: "2028-01-01T23:59:59", quantity: 2, productId: "b7258b23-baa5-4122-a5ed-d7a14f0cc206", userId: "" }, // Tonfisk
    { produceDate: "2026-04-22T16:45:00", expiryDate: "2027-04-01T23:59:59", quantity: 1, productId: "233bff6c-365d-4a70-a12a-95fe9d3aed17", userId: "" }, // Röda linser
    { produceDate: "2026-04-22T16:45:00", expiryDate: "2027-02-01T23:59:59", quantity: 3, productId: "7aa16a98-6e64-4593-803d-554bbc6f82b6", userId: "" }, // Vita bönor
    { produceDate: "2026-04-22T16:45:00", expiryDate: "2026-04-29T23:59:59", quantity: 2, productId: "d7757be8-2dc0-4b31-bb6d-53654279f315", userId: "" }, // Lantmjölk (Går ut imorgon)
    { produceDate: "2026-04-22T16:45:00", expiryDate: "2026-12-15T23:59:59", quantity: 1, productId: "14e311e1-c4ed-4f75-be03-b6731fa19ef0", userId: "" }, // Mango
  ],
  // VAGN 7: Handlad för 2 veckor sedan (2026-04-14). Många utgångna korttidsvaror.
  [
    { produceDate: "2026-04-14T18:20:00", expiryDate: "2026-09-01T23:59:59", quantity: 1, productId: "c6689ea3-df48-4a2b-9b1d-6889cbaa7f31", userId: "" }, // Kycklingfilé
    { produceDate: "2026-04-14T18:20:00", expiryDate: "2026-04-26T23:59:59", quantity: 2, productId: "8adfec8a-2e0b-47a2-b0aa-db4343b78806", userId: "" }, // Hummus (UTGÅNGEN)
    { produceDate: "2026-04-14T18:20:00", expiryDate: "2026-04-24T23:59:59", quantity: 1, productId: "3574a016-fc3e-42c1-9154-bd151cd2216d", userId: "" }, // Jäst (UTGÅNGEN)
    { produceDate: "2026-04-14T18:20:00", expiryDate: "2027-01-10T23:59:59", quantity: 1, productId: "b5ca9a69-d700-4b34-8cef-40c58ade43e3", userId: "" }, // Gröna ärtor
    { produceDate: "2026-04-14T18:20:00", expiryDate: "2027-05-09T23:59:59", quantity: 5, productId: "2a1d13cf-8f27-4324-899e-bd58223024f1", userId: "" }, // Krossade tomater
    { produceDate: "2026-04-14T18:20:00", expiryDate: "2026-04-22T23:59:59", quantity: 2, productId: "5e6ce947-7d49-4914-9c0c-01fad41d49ab", userId: "" }, // Färsk pasta (UTGÅNGEN)
    { produceDate: "2026-04-14T18:20:00", expiryDate: "2026-05-06T23:59:59", quantity: 1, productId: "2e83a8eb-b16e-454a-ac53-7f31bc002303", userId: "" }, // Ägg
  ]
];