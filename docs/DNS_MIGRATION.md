# Migración DNS

## Estado actual

Pendiente. El WordPress actual no debe ser modificado durante esta fase.

## Inventario requerido

- Registros A, AAAA, CNAME.
- MX, TXT, SPF, DKIM, DMARC.
- Subdominios activos.
- TTL actuales.

## Plan de corte

1. Construir y validar en `lexicore-next.vercel.app`.
2. Realizar backup de WordPress y base de datos.
3. Cambiar solo registros de raíz y `www`.
4. No modificar MX, subdominios de sistemas activos ni nameservers sin justificación.
