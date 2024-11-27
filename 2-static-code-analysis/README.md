*Relatório: Análise Estática de Código com ESLint*

Versão 1.0
Após estudar um pouco sobre o ESLint, configurei a primeira regra: semi: ["error", "always"]. Esta regra exige o uso de ponto e vírgula no final das instruções. Ao testar, o ESLint identificou diversos problemas no código, principalmente relacionados à omissão de ponto e vírgula, o que gerou vários erros. A versão 1.0 trouxe uma primeira implementação básica e alguns problemas encontrados no código.

Versão 2.0
Na versão 2.0, continuei os testes e adicionei novas regras como eqeqeq: ["error", "always"], que exige o uso de === em vez de ==. Isso trouxe avanços significativos na identificação de erros relacionados ao uso inadequado de comparações. Além disso, a adição de no-var: "error" ajudou a identificar a utilização de var, que foi substituído por let e const. A versão 2.0 já apresentava uma melhoria visível na qualidade do código, com mais problemas sendo identificados.

Versão 3.0
Na versão 3.0, adicionei ainda mais regras, como no-console: "warn", que gera um aviso quando o console.log é utilizado no código. Isso foi útil para garantir que o código não tivesse saídas indesejadas durante a execução. Além disso, a implementação de indent: ["error", 2] ajudou a padronizar a indentação, tornando o código mais legível e organizado. A versão 3.0 demonstrou um avanço na identificação de problemas e na correção de pontos críticos.

Versão 4.0 - FINAL
Na versão final, busquei adicionar mais regras para alcançar um resultado próximo do exigido. Após testes, percebi que as regras que estavam sendo aplicadas começaram a gerar um impacto menor. Muitas das regras que restaram para aplicar resultaram em apenas um ou dois erros a mais. No final, as regras essenciais foram implementadas e já estavam corrigindo os problemas mais críticos do código. A versão 4.0 trouxe o código mais limpo e alinhado com boas práticas de desenvolvimento.

Desafios e Conclusão:
Durante o desafio, busquei incluir o maior número possível de regras no arquivo de configuração do ESLint. Testei cada uma delas e corrigi os erros à medida que surgiam. O maior desafio foi entender a interação entre diferentes regras e a forma como elas afetavam a qualidade do código. No entanto, com as regras bem configuradas, consegui melhorar consideravelmente a legibilidade, a consistência e a manutenção do código.
Agora, o código está mais robusto e preparado para ser escalado, com menos erros e problemas de estilo. Ao utilizar o ESLint com as regras configuradas, pude garantir que o código não só funcione corretamente, mas também siga as melhores práticas de desenvolvimento.


