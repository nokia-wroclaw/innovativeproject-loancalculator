import React from 'react';
import { InlineMath } from 'react-katex';
import {
  Formula,
  WhiteSubtitle,
  Headers,
  Container,
  Explanation,
  FormulaItems,
  FormulaItem,
} from './HowToCalculateInstallmentsElements';
import Footer from '../../components/footerWhite';

import { SemiHeader } from '../../components/semiHeader/SemiHeader';
import { PurpleAccentParagraph } from '../../components/AccentParagraph/AccentParagraph';
import 'katex/dist/katex.min.css';

function HowToCalculateInstallments() {
  const fixedFormula = '\\frac{A \\ast b}{m*(1-(\\frac{m}{m+b})^n)}';
  const decrementingFormula =
    '\\frac{A}{n} \\ast (1+(n-i-1) \\ast \\frac{b}{m})';
  const descendingNames = [
    'i - numer miesiąca, dla którego obliczana jest rata',
    'A – kwota udzielonego kredytu',
    'b – wysokość oprocentowania kredytu w skali roku',
    'm – liczba miesięcy w roku',
    'n – liczba rat',
  ];
  const fixedNames = [...descendingNames];
  fixedNames.shift();
  return (
    <>
      <Container variant="light">
        <Headers>
          <SemiHeader>Jak obliczamy Twoją ratę?</SemiHeader>
          <PurpleAccentParagraph>
            Stała miesięczna rata kredytu
          </PurpleAccentParagraph>
        </Headers>
        <Formula variant="light">
          {' '}
          <InlineMath math={fixedFormula} />
        </Formula>
        <FormulaItems variant="light">
          {fixedNames.map((item) => (
            <FormulaItem variant="dark" key={item.id}>
              {item}
            </FormulaItem>
          ))}
        </FormulaItems>
      </Container>
      <Container variant="dark">
        <WhiteSubtitle>Malejąca rata kredytu</WhiteSubtitle>
        <Explanation>
          W przypadku raty malejącej spłacana część kapitałowa jest przez cały
          okres spłaty taka sama. Zmienia się jednak wysokość części odsetkowej,
          która z każdą ratą maleje. Łączną wysokość raty w danym miesiącu
          możemy wyliczyć z poniższego wzoru:
        </Explanation>
        <Formula variant="dark">
          <InlineMath math={decrementingFormula} />
        </Formula>
        <FormulaItems variant="dark">
          {descendingNames.map((item) => (
            <FormulaItem variant="light" key={item.id}>
              {item}
            </FormulaItem>
          ))}
        </FormulaItems>
      </Container>
      <Footer />
    </>
  );
}

export default HowToCalculateInstallments;
