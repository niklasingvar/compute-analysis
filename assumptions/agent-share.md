# Agentandel — copilots vs autonoma agenter

Antaganden: A51–A56

## Huvudantagande

**20–30% av aktiva AI-användare** kör autonoma agenter snarare än enkla copilot-assistenter till 2029 (A52). Agenter använder ~10× mer compute per dag.

## Vad är skillnaden?

**Copilot:** En människa ställer en fråga och får ett svar. ~30 000–50 000 tokens per dag (A54). Ungefär 15 interaktioner á 2 000 tokens.

**Agent:** En autonom process som arbetar självständigt i bakgrunden — gör verktygsanrop, läser dokument, kör hela arbetsflöden utan att vänta på mänsklig input. **300 000–500 000 tokens per dag** (A55). Tio gånger mer compute.

## Varför spelar det roll?

En 10-procentenhets ökning i agentandel (från 25% till 35%) höjer Tier 1 med ~50%. Det beror på att agenter belastar GPU:er i längre kedjeresonerang (chain-of-thought), gör fler verktygsanrop, och arbetar under längre perioder per session.

### Compute per användarsegment (A51–A56)

| Segment | Andel 2029 | Tokens/dag | Compute-faktor |
|---|---|---|---|
| Copilot-användare | 45–50% | 30 000–50 000 | 1× |
| Agent-användare | 20–30% | 300 000–500 000 | ~10× |
| Passiv/sällan | 20–25% | <5 000 | ~0,1× |

## Evidens

- **Microsoft 2025 Work Trend Index:** Dokumenterar framväxten av "human-agent teams" och "agentboss"-rollen — där en människa koordinerar flera AI-agenter ([källa](https://news.microsoft.com/annual-work-trend-index-2025/)).
- **Anthropic Claude Code Docs:** Visar att agentisk användning (Claude Code) kan kosta 5–20× mer per session än enkel chat, med TPM-intervall som kräver helt annan kapacitetsplanering ([källa](https://docs.anthropic.com/en/docs/claude-code/costs)).
- **Bloomberg, mars 2026:** Anthropics run-rate visar att agentisk användning redan är ekonomiskt stor ([källa](https://www.bloomberg.com/news/articles/2026-03-03/anthropic-nears-20-billion-revenue-run-rate-amid-pentagon-feud)).

## Känslighet

Agentandel + tokens per agent (A52, A55) är den mest inflytelserika parameterkombinationen i hela modellen:

| Agentandel | Tier 1 2029 |
|---|---|
| 12% (låg) | ~1 200 H100-eq |
| 25% (bas) | ~2 200 H100-eq |
| 40% (hög) | ~3 500 H100-eq |

Källa: Tornado-analys i [03-berakningsmodell.md](../03-berakningsmodell.md).

## Källor

- [Microsoft 2025 Work Trend Index](https://news.microsoft.com/annual-work-trend-index-2025/)
- [Anthropic Claude Code – Costs](https://docs.anthropic.com/en/docs/claude-code/costs)
- [02-antaganden-och-data.md](../02-antaganden-och-data.md) — A51–A56
