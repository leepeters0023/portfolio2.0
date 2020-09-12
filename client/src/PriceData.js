import React, { useRef } from "react";
import styled, { css, ThemeConsumer } from "styled-components";
import { Flex, Box, Text, Heading, Image } from "rebass/styled-components";

const Card = styled(Flex)`
  background: white;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

const Features = styled(Box)`
  list-style: none;
  li {
    display: flex;
    margin-top: 20px;
    align-items: center;
  }
`;

const AddOns = styled(Flex)`
  height: 1px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  justify-content: center;
  align-items: center;
  align-self: center;
  font-weight: 600;

  span {
    top: -50%;
    background: white;
    padding: 10px 24px;
  }
`;

const SubFeature = styled(Text)`
  margin-top: 20px;
  margin-bottom: 5px;
  font-size: 18px;
  padding-left: 10px;
  font-weight: 500;
  text-decoration: underline;
`;
const SmallButton = styled(Button)``;

export const Pricing = ({
  data: { title, subtitle, pricingTiers },
  isFirst,
}) => {
  const isTabletOrMobile = useBreakpoint(2, "maxWidth");
  const containerRef = useRef(null);
  const { width: containerWidth } = useComponentSize(containerRef);

  return (
    <StretchBG pt={isFirst ? 6 : 0} flex={1} bgColor="gradient">
      <WideContent py={5} px={3} style={{ position: "relative" }}>
        <Flex
          flexDirection="column"
          alignItems="center"
          width="100%"
          ref={containerRef}
        >
          {!!title && (
            <Text
              fontSize={[3, 4, 5]}
              mb={subtitle ? 3 : 4}
              variant="heading"
              fontWeight={600}
              alignSelf="center"
              textAlign="center"
            >
              {title}
            </Text>
          )}
          {!!subtitle && (
            <Text
              fontSize={2}
              mb={4}
              variant="heading"
              fontWeight={600}
              alignSelf="center"
              maxWidth="600px"
              textAlign="center"
            >
              {subtitle}
            </Text>
          )}

          {!isTabletOrMobile && (
            <Card mb={4} padding={4} width="90%" flexDirection="column">
              <Flex
                ml="225px"
                flexDirection="row"
                alignItems="baseline"
                justifyContent="flex-end"
              >
                {pricingTiers.map(({ title, subtitle, icon }, i) => (
                  <Flex
                    mr={4}
                    ml={3}
                    flexDirection="column"
                    alignContent="center"
                  >
                    <Image
                      src={
                        icon.asset.localFile?.publicURL || icon.asset.fluid.src
                      }
                      alt={icon.alt}
                    />
                    <Text
                      variant="heading"
                      mt={4}
                      mb={2}
                      textAlign="center"
                      fontSize="32px"
                      lineHeight="38px"
                      color="#1487F0"
                      fontWeight="700"
                    >
                      {title}
                    </Text>
                    <Text
                      variant="heading"
                      textAlign="center"
                      mb={2}
                      fontSize="22px"
                      lineHeight="26px"
                      color="#1487F0"
                      fontWeight="500"
                      maxWidth="200px"
                    >
                      {subtitle}
                    </Text>
                  </Flex>
                ))}
              </Flex>
              <SubFeature>Platform Features</SubFeature>
              <Box>
                {platformFeatures.map(
                  ({ id, feature, basic, professional, enterprise }, i) => (
                    <table cellspacing="0" width="100%" table-layout="fixed">
                      <tr key={id}>
                        <td
                          style={{ padding: "10px" }}
                          padding="15px"
                          width="25%"
                          bgColor={id % 2 === 0 ? "transparent" : "f0f0f0"}
                        >
                          {feature}
                        </td>
                        <td
                          align="center"
                          width="25%"
                          bgColor={id % 2 === 0 ? "transparent" : "f0f0f0"}
                        >
                          {basic ? <Icon name="blueCheck" /> : ""}
                        </td>
                        <td
                          align="center"
                          width="25%"
                          bgColor={id % 2 === 0 ? "transparent" : "f0f0f0"}
                        >
                          {professional ? <Icon name="blueCheck" /> : ""}
                        </td>
                        <td
                          align="center"
                          width="25%"
                          bgColor={id % 2 === 0 ? "transparent" : "f0f0f0"}
                        >
                          {enterprise ? <Icon name="blueCheck" /> : ""}
                        </td>
                      </tr>
                    </table>
                  )
                )}
              </Box>
              <SubFeature>Analysis Packs</SubFeature>
              <Box>
                {analysisPacks.map(
                  ({ id, feature, basic, professional, enterprise }, i) => (
                    <table cellspacing="0" width="100%" table-layout="fixed">
                      <tr key={id}>
                        <td
                          style={{ padding: "10px" }}
                          width="25%"
                          bgColor={id % 2 === 0 ? "transparent" : "f0f0f0"}
                        >
                          {feature}
                        </td>
                        <td
                          align="center"
                          width="25%"
                          bgColor={id % 2 === 0 ? "transparent" : "f0f0f0"}
                        >
                          {basic ? <Icon name="blueCheck" /> : ""}
                        </td>
                        <td
                          align="center"
                          width="25%"
                          bgColor={id % 2 === 0 ? "transparent" : "f0f0f0"}
                        >
                          {professional ? <Icon name="blueCheck" /> : ""}
                        </td>
                        <td
                          align="center"
                          width="25%"
                          bgColor={id % 2 === 0 ? "transparent" : "f0f0f0"}
                        >
                          {enterprise ? <Icon name="blueCheck" /> : ""}
                        </td>
                      </tr>
                    </table>
                  )
                )}
              </Box>
              <SubFeature>Predictive Applications</SubFeature>
              <Box>
                {predictiveApplications.map(
                  ({ id, feature, basic, professional, enterprise }, i) => (
                    <table cellspacing="0" width="100%" table-layout="fixed">
                      <tr key={id}>
                        <td
                          style={{ padding: "10px" }}
                          width="25%"
                          bgColor={id % 2 === 0 ? "transparent" : "f0f0f0"}
                        >
                          {feature}
                        </td>
                        <td
                          align="center"
                          width="25%"
                          bgColor={id % 2 === 0 ? "transparent" : "f0f0f0"}
                        >
                          {basic ? <Icon name="blueCheck" /> : ""}
                        </td>
                        <td
                          align="center"
                          width="25%"
                          bgColor={id % 2 === 0 ? "transparent" : "f0f0f0"}
                        >
                          {professional ? <Icon name="blueCheck" /> : ""}
                        </td>
                        <td
                          align="center"
                          width="25%"
                          bgColor={id % 2 === 0 ? "transparent" : "f0f0f0"}
                        >
                          {enterprise ? <Icon name="blueCheck" /> : ""}
                        </td>
                      </tr>
                    </table>
                  )
                )}
              </Box>
              <SubFeature>Development Tools</SubFeature>
              <Box>
                {developmentTools.map(
                  ({ id, feature, basic, professional, enterprise }, i) => (
                    <table cellspacing="0" width="100%" table-layout="fixed">
                      <tr key={id}>
                        <td
                          style={{ padding: "10px" }}
                          width="25%"
                          bgColor={id % 2 === 0 ? "transparent" : "f0f0f0"}
                        >
                          {feature}
                        </td>
                        <td
                          align="center"
                          width="25%"
                          bgColor={id % 2 === 0 ? "transparent" : "f0f0f0"}
                        >
                          {basic ? <Icon name="blueCheck" /> : ""}
                        </td>
                        <td
                          align="center"
                          width="25%"
                          bgColor={id % 2 === 0 ? "transparent" : "f0f0f0"}
                        >
                          {professional ? <Icon name="blueCheck" /> : ""}
                        </td>
                        <td
                          align="center"
                          width="25%"
                          bgColor={id % 2 === 0 ? "transparent" : "f0f0f0"}
                        >
                          {enterprise ? <Icon name="blueCheck" /> : ""}
                        </td>
                      </tr>
                    </table>
                  )
                )}
              </Box>
              <Flex mr={2} justifyContent="flex-end">
                {pricingTiers.map(({ button }, i) => (
                  <Link
                    to={button}
                    key={`${i}-button`}
                    ml={4}
                    mt={5}
                    mb={5}
                    width={"auto"}
                    alignSelf="center"
                  >
                    <Button width="220px" type="submit">
                      <Text>{button.text}</Text>
                    </Button>
                  </Link>
                ))}
              </Flex>
            </Card>
          )}

          {isTabletOrMobile && (
            <Flex
              my={[4, 4, "120px"]}
              flexDirection="column"
              alignItems="center"
            >
              {pricingTiers.map(({ title, subtitle, icon, button }, i) => {
                let tier;
                if (title == "Basic") {
                  tier = mobileBasic;
                }
                if (title == "Professional") {
                  tier = mobileProfessional;
                }
                if (title == "Enterprise") {
                  tier = mobileEnterprise;
                }
                return (
                  <Card
                    px={4}
                    pb={5}
                    mb={[5, 5, 5, 0]}
                    mt={[5, 5, 5, 0]}
                    width={["100%", "550px"]}
                    alignItems="flex-start"
                  >
                    <Flex
                      pb={2}
                      mb={2}
                      flexDirection="column"
                      alignSelf="center"
                      alignContent="center"
                    >
                      <Image
                        src={
                          icon.asset.localFile?.publicURL ||
                          icon.asset.fluid.src
                        }
                        alt={icon.alt}
                        mt="-40px"
                      />
                      <Text
                        variant="heading"
                        mt={4}
                        mb={2}
                        textAlign="center"
                        fontSize="32px"
                        lineHeight="38px"
                        color="#1487F0"
                        fontWeight="700"
                      >
                        {title}
                      </Text>
                      <Text
                        variant="heading"
                        textAlign="center"
                        mb={2}
                        fontSize="22px"
                        lineHeight="26px"
                        color="#1487F0"
                        fontWeight="500"
                        maxWidth="200px"
                      >
                        {subtitle}
                      </Text>
                    </Flex>
                    <Features as="ul">
                      {tier.map((section) => (
                        <Flex flexDirection="column">
                          <li>
                            <strong>{section.title}</strong>
                          </li>
                          {section.items.map((item) => (
                            <li>
                              <Icon
                                name={
                                  item.included ? "blueBoxWithCheck" : "blueBox"
                                }
                              />
                              <Text ml={3}>{item.item}</Text>
                            </li>
                          ))}
                        </Flex>
                      ))}
                    </Features>
                    <Link
                      to={button}
                      key={`${i}-button`}
                      mt={4}
                      mb={2}
                      width="auto"
                      alignSelf="center"
                    >
                      <Button width="100%" type="submit">
                        {button.text}
                      </Button>
                    </Link>
                  </Card>
                );
              })}
            </Flex>
          )}
        </Flex>
        <Flex width="100%" alignItems="center" justifyContent="center">
          <Text>Have additional questions?</Text>
          <Link to="mailto:sales@twinthread.com?//subject=Contact%20Information">
            <SmallButton ml={3} variant="secondary.small">
              Email us
            </SmallButton>
          </Link>
        </Flex>
      </WideContent>
    </StretchBG>
  );
};
