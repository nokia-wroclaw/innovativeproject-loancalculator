import server.calculator as calculator


def test_calculate_fixed_rate():
    assert calculator.calculate_fixed_rate(
        credit_amount=100000, loan_term=10, interest_rate=3
    ) == (965.61, 115873.2, 15873.2)


def test_calculate_descending_rate():
    assert calculator.calculate_descending_rate(
        credit_amount=100000, loan_term=10, interest_rate=3
    ) == (
        [
            1083.33,
            1081.25,
            1079.17,
            1077.08,
            1075.0,
            1072.92,
            1070.83,
            1068.75,
            1066.67,
            1064.58,
            1062.5,
            1060.42,
            1058.33,
            1056.25,
            1054.17,
            1052.08,
            1050.0,
            1047.92,
            1045.83,
            1043.75,
            1041.67,
            1039.58,
            1037.5,
            1035.42,
            1033.33,
            1031.25,
            1029.17,
            1027.08,
            1025.0,
            1022.92,
            1020.83,
            1018.75,
            1016.67,
            1014.58,
            1012.5,
            1010.42,
            1008.33,
            1006.25,
            1004.17,
            1002.08,
            1000.0,
            997.92,
            995.83,
            993.75,
            991.67,
            989.58,
            987.5,
            985.42,
            983.33,
            981.25,
            979.17,
            977.08,
            975.0,
            972.92,
            970.83,
            968.75,
            966.67,
            964.58,
            962.5,
            960.42,
            958.33,
            956.25,
            954.17,
            952.08,
            950.0,
            947.92,
            945.83,
            943.75,
            941.67,
            939.58,
            937.5,
            935.42,
            933.33,
            931.25,
            929.17,
            927.08,
            925.0,
            922.92,
            920.83,
            918.75,
            916.67,
            914.58,
            912.5,
            910.42,
            908.33,
            906.25,
            904.17,
            902.08,
            900.0,
            897.92,
            895.83,
            893.75,
            891.67,
            889.58,
            887.5,
            885.42,
            883.33,
            881.25,
            879.17,
            877.08,
            875.0,
            872.92,
            870.83,
            868.75,
            866.67,
            864.58,
            862.5,
            860.42,
            858.33,
            856.25,
            854.17,
            852.08,
            850.0,
            847.92,
            845.83,
            843.75,
            841.67,
            839.58,
            837.5,
            835.42,
        ],
        115125.0,
        15125.0,
    )
